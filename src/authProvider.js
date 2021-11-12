import { GUARDIAN_API } from './config';

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        var formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)

        const request = new Request(GUARDIAN_API + 'login', {
            method: 'POST',
            body: formData
        });
        return fetch(request, {
            credentials: "include",
            cache: "no-cache"
          })
            .then(response => {
                if (response.status != 200) {
                    throw new Error(response.statusText);
                }
                return;
            })
            .catch(() => {
                return Promise.reject('Network error during login');
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        const request = new Request(GUARDIAN_API + 'logout', {
            method: 'GET',
        });
        return fetch(request, {
            credentials: "include",
            cache: "no-cache"
          })
          .then(response => {
              if (response.status < 200  || response.status > 300) {
                  return Promise.reject('Network error during logout');
              }
              return;
          })
          .catch(() => {
            return Promise.reject('Network error during logout');
          });
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        const request = new Request(GUARDIAN_API + 'validate', {
            method: 'GET',
        });
        return fetch(request, {
            credentials: "include",
            cache: "no-cache"
          })
            .then(response => {
                if (response.status != 200) {
                    throw new Error(response.statusText);
                }
                return;
            })
            .catch(() => {
                return Promise.reject('Network error during auth validation');
            });
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        const request = new Request(GUARDIAN_API + 'me', {
            method: 'GET',
        });
        return fetch(request, {
            credentials: "include",
            cache: "no-cache"
          })
            .then(response => {
                if (response.status != 200) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                const { id, username, avatar } = auth;
                return { id, fullName: username, avatar };
            })
            .catch(() => {
                return {};
            });
    }
};