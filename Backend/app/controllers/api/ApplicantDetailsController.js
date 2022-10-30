// Facades:
const ApplicantDetails = require('#models/ApplicantDetails')


module.exports = ApplicationDetailsController;

function ApplicationDetailsController() {

    // Auth:
    const _register = async (req, res) => {
        try {
            // Extract request input:
            const email = req.body?.email
            const password = req.body?.password
            const firstName = req.body?.firstName
            const lastName = req.body?.lastName

            // Create new one.
            const [tokens, user] = await usersFacade.register({
                email,
                password,
                firstName,
                lastName
            });

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    tokens,
                    // Convert user to JSON, to clear sensitive data (like password)
                    user: user.toJSON()
                }
            });
        }
        catch (error) {
            console.error("UsersController._create error: ", error);
            return _processError(error, req, res);
        }
    }

    const _login = async (req, res) => {
        try {
            // Extract request input:
            const email = req.body?.email
            const password = req.body?.password


            if (!email || email === undefined || !password || password === undefined) {
                // If bad input, throw ValidationError:
                const err = new Error("Invalid email OR password input");
                err.name = "ValidationError";
                throw err;
            }

            const [tokens, user] = await usersFacade.login({ email, password });

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    tokens,
                    // Convert user to JSON, to clear sensitive data (like password).
                    user: user.toJSON()
                }
            });
        }
        catch (error) {
            console.error("UsersController._login error: ", error);
            return _processError(error, req, res);
        }
    }

    const _validate = async (req, res) => {
        try {
            const { token } = req.body;

            // Validate token against local seed.
            await JWT.verifyAccessToken(token);

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    isValid: true,
                    message: "Valid Token"
                }
            });
        }
        catch (error) {
            console.error("UsersController._validate error: ", error);

            // In any error case, we send token not valid:
            // Create custom error with name InvalidToken.
            const err = new Error('Invalid Token!');
            err.name = "InvalidToken";
            return _processError(err, req, res);
        }
    }

    const _refresh = async (req, res) => {
        try {
            // Unwrap refresh token.
            const refreshToken = req?.refreshToken;
            if (!refreshToken) {
                const err = new Err("No refreshToken found");
                err.name = "Unauthorized";
                err.status = 401;
                throw err;
            }

            // Everything's ok, issue new one.
            const [accessToken] = await jwtFacade.refreshAccessToken({ refreshToken });

            return createOKResponse({
                res,
                content: {
                    token: accessToken
                }
            });
        }
        catch (error) {
            console.error("UsersController._refresh error: ", error);

            // In any error case, we send token not valid:
            // Create custom error with name InvalidToken.
            const err = new Error('Invalid Token!');
            err.name = "InvalidToken";
            return _processError(err, req, res);
        }
    }

    const _logout = async (req, res) => {
        try {
            const refreshToken = req?.refreshToken;
            if (!refreshToken) {
                const err = new Err("No refreshToken found");
                err.name = "Unauthorized";
                err.status = 401;
                throw err;
            }

            // Everything's ok, destroy token.
            const [status] = await jwtFacade.disableRefreshToken({ refreshToken });

            return createOKResponse({
                res,
                content: {
                    status,
                    loggedIn: status === true
                }
            });
        }
        catch (error) {
            console.error("UsersController._logout error: ", error);

            // In any error case, we send token not valid:
            // Create custom error with name InvalidToken.
            const err = new Error('Invalid Token!');
            err.name = "InvalidToken";
            return _processError(err, req, res);
        }
    }
    // Auth\

    // Protected:
    const _getFullName = async (req, res) => {
        try {
            // Unwrap user's id.
            const userId = req?.token?.id;

            // Try to get full name.
            const [fullName] = await usersFacade.getFullName({ userId });

            console.log({ fullName });

            return createOKResponse({
                res,
                content: {
                    fullName
                }
            });
        }
        catch (error) {
            console.error("UsersController._getFullName error: ", error);
            return _processError(error, req, res);
        }
    }

    return {
        // Auth:
        register: _register,
        login: _login,
        validate: _validate,
        refresh: _refresh,
        logout: _logout,

        // Protected:
        getFullName: _getFullName
    }
}
