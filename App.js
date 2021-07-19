import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display:null,
      inputValue:'',
      inputValue1: 0,
      inputValue2: 0,
      resultValue: 0.0,
      operator:'',
    };
  }

  onPressOperator=(optr)=>{
   
    let value=this.state.inputValue.concat(optr);
    this.setState({inputValue:value})

    //   this.setState({inputValue1:parseInt(this.state.inputValue),inputValue:''})
    //   this.setState({operator:optr})
    // console.log(this.state.inputValue1)

    // console.log(typeof(a))
  }

  onPressAc=()=>{
    this.setState({inputValue:'',resultValue:null,inputValue1:null,inputValue2:null})
  }

  onDel=()=>{
    var a=this.state.inputValue.slice(0,-1)
    this.setState({inputValue:a})
  }

  getResult=async()=>{
    this.setState({resultValue:eval(this.state.inputValue)})
    // await this.setState({inputValue2:parseInt(this.state.inputValue)})

    // if(this.state.operator=='/'){
    // var a = this.state.inputValue1/this.state.inputValue2
    // }
    // else if(this.state.operator=='*'){
    //   var a = this.state.inputValue1*this.state.inputValue2
    //   }
    // else if(this.state.operator=='+'){
    //     var a = this.state.inputValue1+this.state.inputValue2
    // } 
    // else if(this.state.operator=='-'){
    //   var a = this.state.inputValue1-this.state.inputValue2
    // }
    // else if(this.state.operator=='%'){
    //   var a = this.state.inputValue1%this.state.inputValue2
    // }

    // this.setState({resultValue:a})
    // if(this.state.inputValue){
    //   // console.log(this.state.inputValue)
    //   // console.log(typeof(this.state.inputValue))
    //   let Result = parseInt(this.state.inputValue);
      // console.log(a)
    //   console.log(typeof(Result))
    //   this.setState({inputValue:Result})
    // }else{
    //   alert("enter Valide number")
    // }
  }

  buttonPress = (currency) => {
    let value=this.state.inputValue.concat(currency);
    this.setState({inputValue:value})
    // console.log(this.state.inputValue);
    // if(this.state.operator==''){
    //   this.setState({ inputValue1: value });
    //   // console.log(this.state.inputValue1);
    // }
    // else{
    //   this.setState({ inputValue2: value });
    // }
    // let Result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    // this.setState({ resultValue: Result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            {/* <Image source={require("./assets/logo1.png")} style={styles.logo} /> */}
           
          </View>
          <Text style={styles.screen}>{this.state.inputValue}</Text>
          <Text style={styles.resultScreen}>{this.state.resultValue}</Text>
          <View style={styles.screenView}>
           
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressAc("")}
              >
                <Text style={styles.buttonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onDel()}
              >
                <Text style={styles.buttonText}>DEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressOperator("%")}
              >
                <Text style={styles.buttonText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressOperator("/")}
              >
                <Text style={styles.buttonText}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("7")}
              >
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("8")}
              >
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("9")}
              >
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressOperator("*")}
              >
                <Text style={styles.buttonText}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("4")}
              >
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("5")}
              >
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("6")}
              >
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressOperator("-")}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("1")}
              >
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("2")}
              >
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("3")}
              >
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.converterButton,styles.buttonOptr]}
                onPress={() => this.onPressOperator("+")}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("0")}
              >
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("00")}
              >
                <Text style={styles.buttonText}>00</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress(".")}
              >
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOptr}
                onPress={() => this.getResult()}
              >
                <Text style={styles.buttonText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    marginTop: 20,
    margin: 10,
  },
  screenView: {
    flex: 1,
    justifyContent:'flex-end'
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#192A56",
    alignItems: "center",
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#192A56",
  },
  input: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    // borderColor: "#c1c1c1",
    // borderWidth: 2,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192A56",
    height: 70,
    borderColor: "#fff",
    borderWidth: 1,
    width: "25%",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  logo: {
    width: Dimensions.get("window").width,
    height: 150,
    marginTop:20
  },
  buttonOptr:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192A56",
    height: 70,
    borderColor: "#fff",
    borderWidth: 1,
    width: "25%",
    backgroundColor:'orange'
  },
  screen:{
    // backgroundColor:'red',
    // width:Dimensions.get('window').width/1.05,
    // height:200,
    fontSize:60,
    marginTop:100,
    // alignItems:'flex-end'
    textAlign: "right",
  },
  resultScreen:{
    fontSize:60,
    marginTop:100,
    textAlign: "right",
    color:'orange'
  }
});
