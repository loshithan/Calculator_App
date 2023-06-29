// import React from 'react';
// import { useContext} from "react";
// import { TouchableOpacity,Text } from "react-native";
// import { ThemeContext } from "./ThemeContext";  
// import { myColors } from "./Color"; 
// import {styles} from './GlobalStyles';

// interface ButtonProps{
//     onPress:()=> void;
//     title: string;
//     isBlue?: boolean;
//     isGrey?: boolean;
// }
// export default function Button({onPress,title,isBlue,isGrey}){
//     const theme = useContext(ThemeContext);
//     return(
//         <TouchableOpacity
//         style={
//             isBlue?
//             styles.btnBlue
//             :isGrey?
//             styles.btnGrey
//             :theme==='light'
//             ?styles.btnLight
//             :styles.btnDark
//         }
//         onPress={onPress}
//         >

//             <Text style={
//                 isBlue || isGrey
//                 ? styles.smallTextLight
//                 :theme === 'dark'
//                 ?styles.smallTextLight
//                 :styles.smallTextDark
//             }>{title}</Text>
//         </TouchableOpacity>
//     );
// }
// import React from 'react';
// import { useContext } from "react";
// import { TouchableOpacity, Text } from "react-native";
// import { ThemeContext } from "./ThemeContext";
// import { styles } from "./GlobalStyles";

// interface ButtonProps {
//     onPress: () => void;
//     title: string;
//     isBlue?: boolean;
//     isGrey?: boolean;
// }

// export default function Button({ title, onPress, isBlue, isGrey }: ButtonProps) {
//     const theme = useContext(ThemeContext);
//     return (
//         <TouchableOpacity 
//             style={
//                 isBlue 
//                 ? styles.btnBlue 
//                 : isGrey 
//                 ? styles.btnGrey 
//                 : theme === "light" 
//                 ? styles.btnLight 
//                 : styles.btnDark
//             } 
//             onPress={onPress}>
//             <Text 
//                style={
//                    isBlue || isGrey 
//                    ? styles.smallTextLight
//                    : theme === "dark" 
//                    ? styles.smallTextLight 
//                    : styles.smallTextDark 
//                 }
//             >
//                 {title}
//             </Text>
//         </TouchableOpacity>
//     );
// }

import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "./ThemeContext";
import { styles } from "./GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGrey?: boolean;
}

export default function Button({ title, onPress, isBlue, isGrey }: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? styles.btnBlue
          : isGrey
          ? styles.btnGrey
          : theme === "light"
          ? styles.btnLight
          : styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGrey
            ? styles.smallTextLight
            : theme === "dark"
            ? styles.smallTextLight
            : styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
