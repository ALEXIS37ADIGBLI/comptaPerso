import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
import { useAuth } from '@/contexts/authContext'

const Register = () => {

    const nameRef = useRef({ value: "" });
    const emailRef = useRef({ value: "" });
    const passwordRef = useRef({ value: "" });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {register : registerUser} = useAuth();

    const handleSubmit = async () => {
        if(
            !emailRef.current.value ||
            !passwordRef.current.value ||
            !nameRef.current.value
        ){
            alert("Veuillez remplir tous les champs");
            return;
        }

        //test de la connexion internet
    //     try {
    //     const response = await fetch('https://www.google.com');
    //     if (!response.ok) throw new Error('No network');
    //     } catch (error) {
    //     Alert.alert("Erreur réseau", "Vérifiez votre connexion internet");
    //     return;
    // }

        setIsLoading(true);
        const res = await registerUser(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
        setIsLoading(false);
        console.log('resulta de register', res);

        if(!res.success){
            Alert.alert("Erreur", res.msg || "Une erreur est survenue");
        }
    }
  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <BackButton iconSize={28}/>

        <View style={{gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={800}>Bon</Typo>
            <Typo size={30} fontWeight={800}>Commençons</Typo>
        </View>

        <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>Créer un compte pour suivre toutes vos dépenses</Typo>
            <Input
                placeholder='Entrez votre nom'
                onChange={(value) => (nameRef.current.value = value)}
                icon={<Icons.UserIcon size={verticalScale(26) } color={colors.neutral300} weight='fill'/>}
            />

            <Input
                placeholder='Entrez votre email'
                onChange={(value) => (emailRef.current.value = value)}
                icon={<Icons.AtIcon size={verticalScale(26) } color={colors.neutral300} weight='fill'/>}
            />

            <Input
                placeholder='Entrez votre mot de passe'
                secureTextEntry
                onChange={(value) => (passwordRef.current.value = value)}
                icon={<Icons.LockIcon size={verticalScale(26) } color={colors.neutral300} weight='fill'/>}
            />

            <Button  onPress={handleSubmit} loading={isLoading}>
                <Typo fontWeight={'700'} size={21} color={colors.black}>S' inscrire</Typo>
            </Button>
        </View>

        <View style={styles.footer}>
            <Typo size={15}>
                Vous avez déja un compte?
            </Typo>
            <Pressable onPress={() => router.push('/(auth)/Login')}>
                <Typo size={15} fontWeight={'700'} color={colors.primary}>Se connecter</Typo>
            </Pressable>
        </View>
        </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,

    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text,

    },
    form: {
        gap: spacingY._20,

    },

    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text,

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15),
    }
})