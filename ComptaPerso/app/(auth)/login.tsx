import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'

const Login = () => {

    const emailRef = useRef("");
    const passwordRef = useRef("");
  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <BackButton iconSize={28}/>

        <View style={{gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={800}>Salut</Typo>
            <Typo size={30} fontWeight={800}>bon retour</Typo>
        </View>

        <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>Connectez-vous maintenant pour suivre toutes vos dépenses</Typo>
            <Input
                placeholder='Entrez votre email'
                icon={<Icons.AtIcon size={verticalScale(26) } color={colors.neutral300} weight='fill'/>}
            />
        </View>
        </View>
    </ScreenWrapper>
  )
}

export default Login

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