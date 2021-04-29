import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"


export type ParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Profile: undefined;
    ClinicInfo: undefined;
    MyBooking: undefined;
}

export type AuthNavParmProps<T extends keyof ParamList> ={
    navigation: StackNavigationProp<ParamList, T>; 
    route: RouteProp<ParamList, T>; 
}
