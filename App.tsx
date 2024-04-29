/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import assets from './assets';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function GreenSection(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer, { backgroundColor: "rgba(27, 49, 2, 1)"}]}> 
      <View style={{paddingBottom: 20}}> 
        <Image source={assets.logo} style={{width: 34, height: 25,}}/>
        <Text style={{fontSize: 18, fontWeight:'700', color: 'rgba(249, 255, 229, 1)'}}>Olá, Ana Paula</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "100%"}}> 
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: 12, fontWeight:'600',  color: 'rgba(255, 255, 255, 0.5)',  }}>Próxima corrida</Text>
          <Text style={{fontSize: 18, fontWeight:'700', color: 'rgba(255, 255, 255, 1)',  }}>GP do Bahrein</Text>
          <Text style={{fontSize: 14, fontWeight:'600', color: 'rgba(255, 255, 255, 0.8)', marginBottom: 5 }}>Data Sáb., 2 de Mar., 12:00</Text>
        </View>
        <Image source={assets.track} style={{width: 141, height: 106,}}/>
      </View>
      <View style={{flexDirection: 'row'}}> 
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(212, 255, 121, 1)', paddingHorizontal: 5, borderRadius: 5}}>
          <Image source={assets.lead} style={{width: 14, height: 14}}/> 
          <Text style={{color: "rgba(54, 54, 54, 1)", fontSize: 12}}>
            Circuito Internacional do Bahrein
          </Text>
        </View>
      </View> 
      <View style={{flexDirection: 'row', paddingVertical: 20}}> 
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(12, 10, 9, 1)', paddingHorizontal: 2, borderRadius: 5}}>
          <Image source={assets.calendar} style={{width: 14, height: 14, marginLeft: 3}}/> 
          <Text style={{color: "rgba(255, 255, 255, 1)", fontSize: 12, marginHorizontal: 3, marginVertical: 2}}>
          Próximas dias
          </Text>
        </View>
        <View style={{marginHorizontal: 5, borderColor: 'white', borderWidth: 1, borderRadius: 5,}}>
          <Text style={{color: "rgba(255, 255, 255, 1)", fontSize: 12, marginHorizontal: 3, marginVertical: 2}}>
          Dia 9, 14:00
          </Text>
        </View>
        <View style={{marginHorizontal: 5, borderColor: 'white', borderWidth: 1, borderRadius: 5}}>
          <Text style={{color: "rgba(255, 255, 255, 1)", fontSize: 12, marginHorizontal: 3, marginVertical: 2}}>
          Dia 24, 14:00
          </Text>
        </View>
      </View>
    </View>
  );
}

function WhiteSection(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer, { backgroundColor: "#FFFFFF", flex: 1}]}>
      <View> 
        <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', fontWeight:'600'}}>Última corrida</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ justifyContent: 'center'}}> 
          <Text style={{fontSize: 18, color: 'rgba(54, 54, 54, 1)', fontWeight:'700'}}>GP de Abu Dhabi</Text>
        </View>
        <Image source={assets.car} style={{width: 172, height: 52,}}/>
      </View>
      <View>
        <Text style={{fontSize: 14, color: 'rgba(0, 0, 0, 0.6)',  fontWeight:'600'}}><Text style={{ color: 'rgba(54, 54, 54, 1)', fontWeight:'bold'}}>Data</Text> Sáb., 2 de Jan., De 2023 12:00</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 8}}> 
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(237, 237, 237, 1)', paddingHorizontal: 5, paddingVertical: 3, borderRadius: 5}}>
          <Image source={assets.lead} style={{width: 14, height: 14}}/> 
          <Text style={{color: "rgba(103, 103, 103, 1)", fontSize: 12}}>
            Circuito Yas Marina Circuit
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 12, paddingVertical: 12, borderRadius: 10, borderColor: '#EDEDED', borderWidth: 1, marginTop: 16}}>
        <View style={{flexDirection: 'row', }}>
          <Image source={assets.TrophyGold} style={{width: 20, height: 20}}/>
          <Text style={{fontSize: 14, fontWeight:'600', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>1º</Text>
          <Text style={{fontSize: 14, fontWeight:'600', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>Max Verstappen</Text>
          <Text style={{fontSize: 14, marginLeft: 5, color: 'rgba(168, 162, 158, 1)'}}>Red Bull</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Image source={assets.TrophySilver} style={{width: 20, height: 20}}/>
          <Text style={{fontSize: 14, fontWeight:'bold', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>2º</Text>
          <Text style={{fontSize: 14, fontWeight:'bold', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>Charles Leclerc</Text>
          <Text style={{fontSize: 14, marginLeft: 5, color: 'rgba(168, 162, 158, 1)'}}>Ferrari</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Image source={assets.TrophyBronze} style={{width: 20, height: 20}}/>
          <Text style={{fontSize: 14, fontWeight:'bold', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>3º</Text>
          <Text style={{fontSize: 14, fontWeight:'bold', marginLeft: 5, color: 'rgba(54, 54, 54, 1)'}}>Lewis Hamilton</Text>
          <Text style={{fontSize: 14, marginLeft: 5, color: 'rgba(168, 162, 158, 1)'}}>Mercedes</Text>
        </View>
      </View>
    </View>
  );
}

function CreamSection( props ): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer, { backgroundColor: "rgba(249, 255, 229, 1)"}]}>
      <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.5)'}}>História</Text>
      <Text style={{fontSize: 14, color: 'rgba(27, 49, 2, 1)', fontWeight:'700', paddingVertical: 8}}>
      Conheça os pilotos de formula 1 que fizeram história em 1960
      </Text>
      <TouchableHighlight onPress={()=>{
        console.log('true')
        props.seePilots()
      }} style={{ backgroundColor: 'rgba(28, 25, 23, 1)', marginTop: 10, marginBottom: 20, padding: 16, borderRadius: 12}}> 
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{fontSize: 14, color: 'rgba(212, 255, 121, 1)', fontWeight: '700'}}>Ver pilotos</Text>
          <Image source={assets.arrowRight} style={{width: 24, height: 24,}}/>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const PilotRender = ({item}) => {
  console.log(item)
  return (
    <View>
      <View>
        <Text>{item.givenName} {item.familyName}</Text>
        <Text>Nascido em {item.dateOfBirth}</Text>
      </View>
    </View>
  )
}

function PilotsView( props ): React.JSX.Element {
  return (
    <View>
      <View>
        <View>
          
        </View>
        <View>
          <Text>História</Text>
        </View>
      </View>
      <View>
        <Text>História da F1</Text>
        <Text>Conheça os nomes que fizeram história, desde os pioneiros até os campeões inesquecíveis.</Text>
      </View>
      <View>
        <Text>Pilotos</Text>
        <FlatList
          data={props.pilots}
          renderItem={PilotRender}
        />
      </View>
    </View>
  )
}

function App(): React.JSX.Element {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/drivers.json',
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#1B3102",
    flex: 1
  };

  const seePilots = () => {
    console.log('here', data.MRData.DriverTable.Drivers)
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={modalVisible?'white':backgroundStyle.backgroundColor}
      />

      <GreenSection/>
      <WhiteSection/>
      <CreamSection seePilots={seePilots}/>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <PilotsView pilots={loading || error?[]:data.MRData.DriverTable.Drivers}/>
      </Modal>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
