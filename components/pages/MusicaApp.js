import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Styles } from '../theme/appTheme';

const MusicaApp = () => {
    const [sound, setSound] = useState();

    async function playSound() {

        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/CantandoComentarios.mp3')
        );
        setSound(sound);


        await sound.playAsync();

    }

    async function NoPuedo() {

        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/Años.mp4')
        );
        setSound(sound);


        await sound.playAsync();

    }
    async function AmoresDeMercado() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/AmoresDeMercado.mp4')
        );
        setSound(sound);


        await sound.playAsync();
    }

    async function SebastianYatra() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/SebastianYatra.mp4')
        );
        setSound(sound);


        await sound.playAsync();
    }


    async function AlexanderBlas() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/AlexanderBlas.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }

    async function DevuélvemeELCorazón() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/DevuélvemeELCorazón.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }


    async function Mayores() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/Mayores.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }



    async function SinPijama() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/SinPijama.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }
    async function YaMeEntere() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/YaMeEntere.mp3')
        )
        setSound(sound);
        await sound.playAsync()
    }


    async function NoPuedoAlejarmeDeeTI() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/NoPuedoAlejarmedeTi.mp4')
        )
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {

                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <ScrollView>

            <Text style={Styles.Textos}>Escucha Los Mejores canciones </Text>
           
            <Text></Text>
            <View style={Styles.Button}>
                
                <TouchableOpacity>
                    <Button title="Play" onPress={NoPuedo} />
                </TouchableOpacity>


            </View>


            <View style={Styles.Buttoness}>
                <TouchableOpacity>
                    <Button title="Play" onPress={AmoresDeMercado} />
                </TouchableOpacity>
            </View>

            <View style={Styles.Buttones}>

                <TouchableOpacity>
                    <Button title='Play' onPress={SebastianYatra} />
                </TouchableOpacity>

            </View>

            <View style={Styles.Butones}>

                <TouchableOpacity>
                    <Button title='Play' onPress={AlexanderBlas} />
                </TouchableOpacity>

            </View>

            <View style={Styles.Botones}>
                <TouchableOpacity>
                    <Button title='Play' onPress={DevuélvemeELCorazón} />
                </TouchableOpacity>


            </View>

            <View style={Styles.Bottones}>

                <TouchableOpacity>
                    <Button title='Play' onPress={SinPijama} />
                </TouchableOpacity>
            </View>

            <View style={Styles.Botton}>

                <TouchableOpacity>
                    <Button title='Play' onPress={YaMeEntere} />
                </TouchableOpacity>

            </View>

            <View style={Styles.Bootones}>
                <TouchableOpacity>
                    <Button title='Play' onPress={NoPuedoAlejarmeDeeTI} />
                </TouchableOpacity>

            </View>


            <View style={Styles.Boottones}>
                <TouchableOpacity>
                    <Button title="Play" onPress={playSound} />
                </TouchableOpacity>
            </View>



            <View style={Styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={Mayores} />
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
}


export default MusicaApp;
