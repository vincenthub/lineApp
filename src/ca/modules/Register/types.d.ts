declare module 'RegisterModuleTypes' {
    // Models
    export type UserVO = {
      uid: string;
      providerId: string;
      displayName: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phoneNumber: string;
      photoURL: string;
    }
  
    export type RegisterResultVO = {
      uid: string;
      providerId: string;
      displayName: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phoneNumber: string;
      photoURL: string;
    }

    export type RegisterParams = {
      email: string;
      password: string;
    }
}
  
  
  
  
  
  