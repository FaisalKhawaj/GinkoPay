
import React,{useState} from 'react';
import { View,FlatList, BackHandler,  Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modal1,Modal2,Modal3,Modal4} from '../../components/walletModals';
import GradientIcon from '../../components/GradientIcon'
import SENT from '../../assets/sent.svg'
import RECIEVED from '../../assets/recieved.svg'
import BUY from '../../assets/buy.svg'
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

  const [data,setData] = useState(obj)
  const [historyTab,setHistoryTab] = useState(false)
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
 
  const renderPortfolioItem = (item) => {
    return (
      <TouchableOpacity style={styles.verticalListItem}>
        <View style={styles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:20}}>
                Bitcoin
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Text style={{color:'#fff',fontSize:14,marginRight:20}}>
                  BTC
                </Text>
                <Text style={{color:'green',fontSize:14,}}>
                  +11.70%
                </Text>
              </View>
          </View>
          <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
              <Text style={{color:'#fff',fontSize:20}}>
                USD $65465.56
              </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const renderHistoryItem = (item) => {
    return (
        <TouchableOpacity style={styles.verticalListItem}>
        <View style={styles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:20}}>
                Aftab Amin
              </Text>
              <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Text style={{color:'#fff',fontSize:14,}}>
                  $234.32
                </Text>
              </View>
          </View>
          <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
              <Text style={{color:'#fff',fontSize:20}}>
                12.3 ETH
              </Text>
          </View>
      </TouchableOpacity>
    )
  }

  const marketPress = () => {
    setHistoryTab(false)
  }

  const showModal1 = (val) => {
    switch (val) {
      case "assets":
        setModal1(true)
        break;
      case "sent":
        setModal2(true)
        break;
      case "received":
        setModal3(true)
        break;
      case "buy":
        setModal4(true)
        break;
    }
  }
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconBackground}
              onPress={() => showModal1("assets")}
            >
                <Image style={styles.mainIcon} source={{uri:"https://i.pinimg.com/564x/de/fe/c1/defec1130775ba6b3db467359cc7599e.jpg"}} />
            </TouchableOpacity>
                
            <TouchableOpacity 
              onPress={() => showModal1("assets")}
              style={{flexDirection:'row',alignSelf:'center'}
            }>
                <Text style={{color:'#fff',fontSize:16}}>
                    My Assets
                </Text>
                <MaterialIcon name="arrow-drop-down" color="#fff" size={30} />
            </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
            <View style={{flex:1}}>
                <Text style={{color:'#fff',fontSize:25}}>
                    12.4345 ETH
                </Text>
                <View style={{flexDirection:'row',alignItems: 'center',marginTop:10}}>
                    <Text style={{color:'#fff'}}>
                        234.45345$
                    </Text>
                    <Text style={{color:'green',marginHorizontal:20}}>
                        23.43%
                    </Text>
                </View>
                
            </View>
            <View style={{height:100,width:100,margin:10,alignItems: 'center',justifyContent: 'center',borderRadius:50,backgroundColor:"#222225"}}>
                <Image style={styles.mainIcon} source={require('../../assets/btc.png')} />
            </View>
        </View>
        <View style={styles.horizantalListView}>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal1("sent")}
            >
              <SENT />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal1("received")}
            >
                <RECIEVED />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => showModal1("buy")}
            >
                <BUY />
            </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
        <TouchableOpacity
            onPress={() => marketPress()}
            style={{borderBottomWidth:!historyTab?2:0,margin:10,paddingHorizontal:20,
            borderBottomColor:!historyTab?"#fff":"#000",}}>
            <Text style={{color:'#fff',fontSize:18}}>
                Portfolio
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => setHistoryTab(true)}
            style={{borderBottomWidth:historyTab?2:0,margin:10,paddingHorizontal:20,
            borderBottomColor:historyTab?"#fff":"#000",}}>
            <Text style={{color:'#fff',fontSize:18}}>
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
                <Text style={{color:'#fff',fontSize:18,marginBottom:10}}>
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
        <View style={{position:'absolute',}}>
          <Modal1 visible={modal1} setVisible={setModal1} />
          <Modal2 visible={modal2} setVisible={setModal2} />
          <Modal3 visible={modal3} setVisible={setModal3} />
          <Modal4 visible={modal4} setVisible={setModal4} />
        </View>
        
    </View>
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
        width:width,
        flexDirection:'row',
        alignItems: 'center',
    },
    shadow: {
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    mainView: {
      alignItems: "center",
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginHorizontal:20,
      marginBottom:20,
    },
    iconBackground: {
      height:35,
      width:35,
      alignSelf:"flex-start",
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#F7931A',
      borderRadius:25,
      marginRight:20
    },
    mainIcon:{
      height:35,
      width:35,
    },
    button: {
        flex:1,
        marginHorizontal:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor:'#2A2D3C',
    },
    horizantalListView: {
      
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-evenly',
      marginBottom:20,
      marginHorizontal:20
    },
    verticalListItem: {
      flexDirection:'row',
      // backgroundColor:'#171921',
      marginHorizontal:10,
      marginBottom:8,
      padding:12,
      borderRadius:10,
    },
    tabView: {
      flexDirection:'row',
      alignItems: 'center',
      margin:15,
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
    newsListItem: {
      flex:1,
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#FFF',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
})