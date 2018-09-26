import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { DummyData } from '../components/flatListExmPage/DummyData';

data = [
	{
		firstName: 'Ayşe',
		lastName: 'Kaya',
		phone: '05556376378'
	},
	{
		firstName: 'Gaye',
		lastName: 'Akbaba',
		phone: '05559206378'
	},
	{
		firstName: 'Mehmet',
		lastName: 'Açar',
		phone: '05413568790'
	}
];

class FlatListExmPage extends Component {
	state = {
		isShowListVisible: false,
		data: data
	};
	// componentDidMount(){
	//     this.fetchData();
	// }

	// fetchData=async ()=>{
	//     const response= await fetch("http://www.json-generator.com/api/json/get/bUnhveDRVe?indent=2");
	//     const json= await response.json();
	//     this.setState({data:json.indent});

	// };

	renderFlatList() {
		if (this.state.isShowListVisible === true) {
			return (
				<View style={styles.list}>
					<FlatList
						// data={this.state.data}
						data={this.state.data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item, index }) => {
							return (
								<View key={index}>
									{/*                 
                        <Text   >{item.people.phone}</Text>
                        <Text    >{item.people.age}</Text>
                        <Text   >{item.people.name}</Text> */}
									<Text>{item.firstName}</Text>
									<Text>{item.lastName}</Text>
									<Text>{item.phone}</Text>
								</View>
							);
						}}
					/>
					<Button raised onPress={() => this.deleteItem()}>
						Sil
					</Button>
					<Button raised onPress={() => this.addNewItem()}>
						Ekle
					</Button>
				</View>
			);
		}
		return <View />;
	}
	addNewItem() {
		var newItem = {
			firstName: 'Görgü',
			lastName: 'Nadir',
			phone: '05413568790'
        };
        let a = this.state.data;
        // a.push(newItem);
        a = [...a, newItem]; // 3 nokta , a nın hepsini al demek.a=[...a,newItem] da a nın hepsini al, sonuna da newItem ı ekle bu da a adında yeni bir dizi olsun demek.
		this.setState({ data: a });
	}

	deleteItem() {
		this.setState({ data: this.state.data.splice() });
	}
	render() {
        console.log(this.state);
		return (
			<View style={styles.container}>
				<Button
					raised
					onPress={() => {
						this.setState({ isShowListVisible: !this.state.isShowListVisible });
					}}
				>
					Listele
				</Button>
				{this.renderFlatList()}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	list: {}
});
export { FlatListExmPage };

// array.shift() // Dizinin ilk elemanını çıkartır.
// array.unshift(0) // Diziye bir eleman ekler. (En başa)
// // delete array[1] // Dizinin 1. anahtarlı elemanını çıkartır.
// array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
// array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
// array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
// array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır
