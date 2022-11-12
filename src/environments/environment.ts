// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // added , after production:false and replace = with : , remove const keyword

   firebase :{
    apiKey: "AIzaSyDPqYYpamRxwP4NqvFN8SSTYFrUJlNlXXw",
    authDomain: "githubloginfirebase.firebaseapp.com",
    projectId: "githubloginfirebase",
    storageBucket: "githubloginfirebase.appspot.com",
    messagingSenderId: "22088589178",
    appId: "1:22088589178:web:9329162d8f970a2e3e40c3"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
