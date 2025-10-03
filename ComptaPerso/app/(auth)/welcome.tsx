import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'

const welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.loginButtn}>
            <Typo fontWeight={'500'}>Se connecter</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering = {FadeIn.duration(1000)}
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode='contain'
          />
        </View>

        <View style={styles.footer}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} style={{alignItems: 'center'}}>
            <Typo size={30} fontWeight={'800'}>Prenez toujours le contrôle</Typo>
            <Typo size={30} fontWeight={'800'}>de vos finances</Typo>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).delay(100).springify()} style={{alignItems: 'center', gap: 2}}>
            <Typo size={17} color={colors.textLight}>les finances doivent être organisées </Typo>
            <Typo size={17} color={colors.textLight}>pour établir un meilleur mode de vie à l'avenir</Typo>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(1000).delay(100).springify()} style={styles.buttonContainer}>
          <Button >
            <Typo size={22} color={colors.neutral900} fontWeight={"600"}>Commençons</Typo>
          </Button>
        </Animated.View>
        </View>

        
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },
  loginButtn: {
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  }
})