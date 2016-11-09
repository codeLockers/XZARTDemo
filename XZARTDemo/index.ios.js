/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ART
} from 'react-native';

import {
  Svg,
  Circle,
  Rect,
  Polygon,
  Text
} from 'react-native-svg'


const {Surface, Group, Shape,Path} = ART

export default class XZARTDemo extends Component {
  render() {
    
    //实线
        // const path =  ART.Path()
        // path.moveTo(1,1)
        // path.lineTo(300,1)

        // return(
        //     <View style={styles.container}>
        //       <ART.Surface width={300} height={2}>
        //         <ART.Shape d={path} stroke='red' strokeWidth={1}/>
        //       </ART.Surface>
        //     </View>
        // )
    
    //虚线
      // const path = Path()
      //   .moveTo(1,1)
      //   .lineTo(300,1)

      // return(
      //   <View style={styles.container}>
      //     <Surface width={300} height={2}>
      //       <Shape d={path} stroke='red' strokeWidth={1} strokeDash={[10,5,20]}/>
      //     </Surface>
      //   </View>
      //   )
    
    //矩形
      // const path = Path()
      //   .moveTo(1,1)
      //   .lineTo(1,99)
      //   .lineTo(99,99)
      //   .lineTo(99,1)
      //   .close()

      // return(
      //   <View style={styles.container}>
      //     <Surface width={300} height={200}>
      //       <Shape d={path} stroke='red' fill='yellow' strokeWidth={1}/>
      //     </Surface>
      //   </View>
      //   )
    //圆
      // const path = new Path()
      //   .moveTo(60,10)
      //   .arc(0,50,25)
      //   .arc(0,-100,25)
      //   .close()

      //   return(
      //     <View style = {styles.container}>
      //       <View style={{width:100,height:100,backgroundColor:'yellow',justifyContent: 'center',alignItems: 'center',}}>
      //       <Surface width={100} height={100}>
      //         <Shape d={path} stroke='red' strokeWidth={1}/>
      //       </Surface>
      //       </View>
      //     </View>
      //     )
      
      //Group
      // const pathRect = new Path()
      //   .moveTo(1,1)
      //   .lineTo(1,99)
      //   .lineTo(99,99)
      //   .lineTo(99,1)
      //   .close()

      // const pathCircle = new Path()
      //   .moveTo(50,1)
      //   .arc(0,99,25)
      //   .arc(0,-99,25)
      //   .close()

      //   return(
      //     <View style={styles.container}>
      //       <Surface width={100} height={100}>
      //         <Group>
      //           <Shape d={pathRect} stroke='red' strokeWidth={1}/>
      //           <Shape d={pathCircle} stroke='yellow' strokeWidth={1}/>
      //         </Group>
      //       </Surface>
      //     </View>
      //     )
      
      //Svg
      return(
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <Svg height='300' width='300'>
            <Circle
            cx='50'
            cy='50'
            r='49'
            stroke='red'
            strokeWidth='1'
            fill='green'/>
            <Rect
            x='25'
            y='5'
            width='100'
            height='50'
            fill='yellow'
            stroke='green'
            strokeWidth='2'/>
            <Polygon
        points="10,10 20,12 30,20 40,60 60,70 "
        fill="red"
        stroke="black"
        strokeWidth="3"
    />
     <Text
        fill="none"
        stroke="purple"
        fontSize="20"
        fontWeight="bold"
        x="100"
        y="20"
        textAnchor="middle"
    >STROKED TEXT</Text>
          </Svg>
        </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XZARTDemo', () => XZARTDemo);
