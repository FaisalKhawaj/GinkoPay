
import React,{useState} from 'react';
import { View,FlatList,  Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import CustomText from '../../components/Text'
const {width, height} = Dimensions.get("screen");
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
const DashBoardScreen = ({navigation}) => {

  const [data,setData] = useState(obj)
  const [newsTab,setNewsTab] = useState(true)

  const renderTopMoversItem = () => {
    return (
      <View style={styles.horizantalListItem}>
        <CustomText 
          text={"+20.25%"} 
          locations={[0,1]} 
          colors={["#70A2FF", "#F76E64"]} 
          style={{fontSize:22,fontWeight:"bold", textAlign:"center"}} 
        />
        <View style={{flexDirection:'row',margin:10,alignItems: 'center',justifyContent: 'center'}}>
            <View style={{
              height:30,
              width:30,
              alignItems: 'center',
              justifyContent:'center',
              backgroundColor:'#1BA27A',
              borderRadius:15,
              marginRight:10}}>
              <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
            </View>
          <View style={{flexDirection:'column'}}>
            <Text style={{color:'#fff'}}>
              LiteCoin
            </Text>
            <Text style={{color:'#fff'}}>
              UST 23.33
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const renderMarketItem = () => {
    return (
      <View style={styles.verticalListItem}>
        <View style={styles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:16}}>
                Bitcoin
              </Text>
              <Text style={{color:'#fff',fontSize:12}}>
                BTC
              </Text>
          </View>
          <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
              <Text style={{color:'#fff'}}>
                USD $65465.56
              </Text>
              <Text style={{color:'green',}}>
                +11.70%
              </Text>
          </View>
      </View>
    )
  }

  const renderNewsItem = () => {
    return (
      <View style={styles.verticalListItem}>
          <View style={styles.verticalListIconBackground}>
            <Image style={{height:18,width:18}} source={require('../../assets/btc.png')} />
          </View>
            
          <View style={{flexDirection:'column',flex:1}}>
              <Text style={{color:'#fff',fontSize:16}}>
                Bitcoin
              </Text>
              <Text style={{color:'#fff',fontSize:12}}>
                BTC
              </Text>
          </View>
          <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
              <Text style={{color:'#fff'}}>
                USD $65465.56
              </Text>
              <Text style={{color:'green',}}>
                +11.70%
              </Text>
          </View>
      </View>
    )
  }
    
  return (
      <View style={styles.container}>
          <Text style={{color:'#fff',fontSize:24,margin:20,fontWeight:"bold"}}>
            Watchlist
          </Text>
          <View style={styles.mainView}>
            <View style={styles.iconBackground}>
              <Image style={styles.mainIcon} source={require('../../assets/btc.png')} />
            </View>
              
            <View style={{flexDirection:'column',flex:1}}>
                <Text style={{color:'#fff',fontSize:16}}>
                  Bitcoin
                </Text>
                <Text style={{color:'#fff',fontSize:12}}>
                  BTC
                </Text>
            </View>
            <View style={{flexDirection:'column',alignItems: 'flex-end'}}>
                <Text style={{color:'#fff'}}>
                  USD $65465.56
                </Text>
                <Text style={{color:'green',}}>
                  +11.70%
                </Text>
            </View>
          </View>
          <Text style={{color:'#fff',margin:20,fontSize:24,fontWeight:"bold"}}>
            Top Movers
          </Text>
          <View style={styles.horizantalListView}>
            <FlatList 
              data={data}
              horizontal={true}
              renderItem={renderTopMoversItem}
              keyExtractor={(item,index) => index.toString()}
            />
          </View>
          <View style={styles.tabView}>
            <TouchableOpacity
              onPress={() => setNewsTab(false)}
              style={{borderWidth:2,
                borderBottomColor:!newsTab?"#fff":"#000",}}>
              <Text style={{color:'#fff',fontSize:18}}>
                Market
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setNewsTab(true)}
              style={{borderWidth:2,
                borderBottomColor:newsTab?"#fff":"#000",}}>
              <Text style={{color:'#fff',fontSize:18}}>
                News
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.verticalListView}>
            {!newsTab ? (
              <FlatList 
                data={data}
                renderItem={renderMarketItem}
                keyExtractor={(item,index) => index.toString()}
              />
            ):
              <FlatList 
                data={data}
                renderItem={renderNewsItem}
                keyExtractor={(item,index) => index.toString()}
              />
            }
          
          </View>
      </View>
  );
}; 
export default DashBoardScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#17171A"
    },
    mainView: {
      alignItems: "center",
      flexDirection:'row',
      justifyContent:'flex-start',
      marginHorizontal:20,
    },
    iconBackground: {
      height:45,
      width:45,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#F7931A',
      borderRadius:25,
      marginRight:20
    },
    mainIcon:{
      height:30,
      width:30,
    },
    horizantalListView: {
      
    },
    horizantalListItem: {
      backgroundColor:'#2A2D3C',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:20,
      padding:12,
      borderRadius:10,
    },
    verticalListItem: {
      flexDirection:'row',
      backgroundColor:'#171921',
      marginHorizontal:20,
      marginBottom:8,
      padding:12,
      borderRadius:10,
    },
    tabView: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      marginVertical:20,
    },
    verticalListView: {
      flex:1,
      justifyContent: 'center'
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
    }

})