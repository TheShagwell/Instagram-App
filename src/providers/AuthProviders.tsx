import { Session, User } from "@supabase/supabase-js";
import {
    PropsWithChildren,
    createContext,
    useContext,
    useState,
    useEffect
} from 'react'
import { ActivityIndicator } from "react-native";
import { supabase } from "../lib/supabase";

type Auth = {
    isAuthenticated: boolean;
    session: Session | null;
    user?: User;
}

const AuthContext = createContext<Auth>({
    isAuthenticated: false,
    session: null,
});



