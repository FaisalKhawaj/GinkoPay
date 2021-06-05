
import React,{useState} from 'react';
import { View,FlatList, StatusBar,  Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import {Container , Content} from 'native-base'
import Feather from 'react-native-vector-icons/Feather';
import { boldtext, simpletext } from '../../constants/fonts';
import { graycolor, green } from '../../constants/colors';
import CustomText from '../../components/Text';

import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
import CURRECO from '../../assets/CurrencyEthereum.svg'
import AssetsModal from '../../components/AssetsModal';
import SentModal from '../../components/SentModal'
import RecievedModal from '../../components/RecievedModal'
const {width, height} = Dimensions.get("window");


var obj = [
{
  key:1,
  value: 10,
  str:'fdfgdfg'
},
{
  key:2,
  value: 10,
  str:'dfgdfg'
},
{
  key:3,
  value: 10,
  str:'fdgdf'
},
{
  key:4,
  value: 10,
  str:'gdfg',
},
{
  key:5,
  value: 10,
  str:"dgdfg",
},
{
  key:6,
  value: 10,
  str:'gdfg',
},
]

const Home = ({navigation}) => {
  StatusBar.setHidden(true)
  
  const [data,setData] = useState(obj)
  const [historyTab,setHistoryTab] = useState(false)
  const [assetsmodal, setAssetsModal] = useState(false);
  const [sentmodal, setSentModal] = useState(false);
  const [recievemodal, setRecievedModal] = useState(false);
  const [modal4, setModal4] = useState(false);
 
  const renderPortfolioItem = (item) => {
    return (
      <TouchableOpacity style={protfilioitemstyles.verticalListItem}>
        <View style={protfilioitemstyles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:16, fontFamily:boldtext}}>
                Binance Coin
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Text style={{color:'#fff',fontFamily:simpletext, fontSize:12,marginRight:15}}>
                  BTC
                </Text>
                <Text style={{color:green,fontFamily:simpletext, fontSize:12,}}>
                  +11.70%
                </Text>
              </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
              <Text style={{color:'#fff',fontFamily:boldtext, fontSize:16}}>
                $65465.56
              </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const renderHistoryItem = (item) => {
    return (
        <TouchableOpacity style={historyitemstyles.verticalListItem}>
        <View style={historyitemstyles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:14, fontFamily:boldtext}}>
                Aftab Amin
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Text style={{color:graycolor,fontSize:12,fontFamily:simpletext }}>
                  $234.32
                </Text>
              </View>
          </View>
          <View style={{flexDirection:'column', alignItems: 'flex-end'}}>
              <Text style={{color:'#fff',fontSize:14,fontFamily:boldtext,}}>
                12.3 ETH
              </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const marketPress = () => {
    setHistoryTab(false)
  }

  const showModal = (val) => {
    switch (val) {
      case "assets":
        setAssetsModal(true)
        break;
      case "sent":
        setSentModal(true)
        break;
      case "received":
        setRecievedModal(true)
        break;
      case "buy":
        setModal4(true)
        break;
      default:
        return;
    }
  }
    
  return (
    <Container style={styles.container}>
      <StatusBar hidden />
        <View style={styles.header}>
            <TouchableOpacity style={styles.profile}
            
            >
              <Image style={styles.profileimage} source={{uri:"https://i.pinimg.com/564x/de/fe/c1/defec1130775ba6b3db467359cc7599e.jpg"}} />
            </TouchableOpacity>  
            
            <TouchableOpacity 
              onPress={() => showModal("assets")}
              style={{flexDirection:'row', alignSelf:'center'}
            }>
                <Text style={{color:'#fff', fontFamily:simpletext,marginRight:10, fontSize:14}}>
                    My Assets
                </Text>
                <Feather name="chevron-down" color="#fff" size={22} />
            </TouchableOpacity>
        </View>
       
        <View style={styles.mainView}>
            <View style={{flex:1}}>
               <CustomText 
                text="12.4345 ETH" 
                locations={[0,0.1,0.6,.8,1]}
                colors={["#A9CDFF", "#72F6D1","#A0ED8D","#FED365","#FAA49E"]} 
                style={{color:"#fff", fontFamily:simpletext, fontSize:30,}} />
                <View style={{flexDirection:'row',alignItems: 'center',marginTop:1}}>
                    <Text style={{color:'#fff', fontFamily:simpletext}}>
                        234.45345$
                    </Text>
                    <Text style={{color:green ,fontFamily:simpletext,marginHorizontal:10}}>
                        23.43%
                    </Text>
                </View>
            </View>
               <CURRECO />
        </View>

        <View style={styles.horizantalListView}>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal("sent")}
            >
              <SENT />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal("received")}
            >
                <RECIEVED />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal("buy")}
            >
                <BUY />
            </TouchableOpacity>
        </View>

        <View style={styles.tabView}>
            <TouchableOpacity
                onPress={() => marketPress()}
                style={{borderBottomWidth:!historyTab?2:0,margin:10,paddingHorizontal:15,
                borderBottomColor:!historyTab?"#fff":"rgba(0,0,0,0)",}}>
                <Text style={{color:!historyTab?"#fff":graycolor,fontFamily:simpletext, fontSize:16}}>
                    Portfolio
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => setHistoryTab(true)}
                style={{borderBottomWidth:historyTab?2:0,margin:10,paddingHorizontal:15,
                borderBottomColor:historyTab?"#fff":"rgba(0,0,0,0)",}}>
                <Text style={{color:historyTab?"#fff":graycolor,fontFamily:simpletext, fontSize:16}}>
                    History
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{flex:1,marginHorizontal:20}}>
          {!historyTab ? (
            <FlatList 
                data={data}
                renderItem={renderPortfolioItem}
                keyExtractor={(item,index) => index.toString()}
            />
          ):
            <View>
                <Text style={{color:'#fff',fontSize:14,fontFamily:simpletext, marginBottom:10}}>
                    Transactions ({data.length})
                </Text>
                <FlatList 
                    data={data}
                    renderItem={renderHistoryItem}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
          }
        </View>
        
        <AssetsModal visible={assetsmodal} setVisible={setAssetsModal} />
        <SentModal visible={sentmodal} setVisible={setSentModal} />
        <RecievedModal visible={recievemodal} setVisible={setRecievedModal} />
    </Container>
  );
}; 
export default Home;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#17171A"
    },
    header: {
        marginHorizontal:20,
        marginVertical:10,
        width:width/1.8,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    profile: {
      height:35,
      width:35,
      alignSelf:"flex-start",
      alignItems: 'center',
      overflow:"hidden",
      justifyContent:'center',
      backgroundColor:'#F7931A',
      borderRadius:25,
      marginRight:20
    },
    mainView: {
      alignItems: "center",
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginHorizontal:20,
      marginBottom:20,
    },   
    profileimage:{
      height:35,
      width:35,
    },
    tabView: {
      flexDirection:'row',
      alignItems: 'center',
      margin:15,
    },
    horizantalListView: {
      flexDirection:'row',
      alignItems:"flex-start",
      justifyContent:"flex-start",
      marginHorizontal:15,
      marginBottom:20,
    },
    button: {
        marginHorizontal:10,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#2A2D3C',
    },
    newsListItem: {
      flex:1,
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#FFF',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
})

const protfilioitemstyles = StyleSheet.create({
  verticalListItem: {
    flexDirection:'row',
    marginHorizontal:10,
    marginBottom:8,
    padding:12,
    borderRadius:10,
  }, 
  verticalListIconBackground: {
    alignSelf:'center',
    height:35,
    width:35,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#F7931A',
    borderRadius:18,
    marginRight:20
  },
})

const historyitemstyles = StyleSheet.create({
  verticalListItem: {
    flexDirection:'row',
    marginHorizontal:10,
    marginBottom:8,
    padding:12,
    borderRadius:10,
  }, 
  verticalListIconBackground: {
    alignSelf:'center',
    height:35,
    width:35,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#F7931A',
    borderRadius:18,
    marginRight:20
  },
})