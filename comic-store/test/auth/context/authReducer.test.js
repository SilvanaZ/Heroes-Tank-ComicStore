import { authReducer, types } from 'comic-store/src/auth';

describe("Pruebas en authReducer", () => {
    test("debe de retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test("login debe llamar el login autenticador y establecer el usuario", () => {
        const action = {
            type: types.login,
            payload: {
                name: "Damian",
                id: "1234",
            },
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });

    test(" el logout debe borrar el nombre de usuario y loguearse en falso ", () => {
        const state = {
            logged: true,
            user: { id: "1234", name: "Damian" },
        };

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});
