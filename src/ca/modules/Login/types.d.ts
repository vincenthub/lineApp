declare module 'LoginModuleTypes' {
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
  
    export type LoginResultVO = {
      user_key: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      mobile_number: string;
      DOB: string;
      gender: string;
      area: string;
      profile_image: string;
      access_token: string;
    }

    export type LoginParams = {
      email: string;
      password: string;
    }
  }
  
  
  
  
  
  