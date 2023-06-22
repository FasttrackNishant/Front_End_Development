import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import Products from './components/NewPattern/Products';
import NewProduct from './components/NewPattern/NewProduct';

function App() {

  const response =
    [

      {
        "ItemName": "Nirma1",
        "ItemDay": "12",
        "ItemMonth": "June",
        "ItemYear": "1954"
      }
      ,
      {
        "ItemName": "SufExcel1",
        "ItemDay": "22",
        "ItemMonth": "July",
        "ItemYear": "1999"

      }
      , {
        "ItemName": "5551",
        "ItemDay": "26",
        "ItemMonth": "Sept",
        "ItemYear": "2014"

      }
    ]

  const ItemTwo = "SurfExcel";

  const products =
    [

      {
        "id": "1",
        "title": "Aerial",
        "amount": "100",
        "date": new Date(2021, 8, 20),
      }
      ,
      {
        "id": "2",
        "title": "22",
        "amount": "July",
        "date": new Date(2020, 10, 15)

      }
      , {
        "id": "3",
        "title": "26",
        "amount": "Sept",
        "date": new Date(2025, 5, 25)

      }
    ]


  function printProductData() {

    console.log("iam inside app .js print product")
    console.log(data);
  }

  return (
    <div>
      <Card>
        <Item name="Nirma">This is first Item</Item>
        <ItemDate day="20" month="June" year="1998"></ItemDate>

        <Item name={ItemTwo}></Item>
        <ItemDate day="22" month="July" year="1999"></ItemDate>

        <Item name="555"></Item>
        <ItemDate day="24" month="Sept" year="2010"></ItemDate>

        {/* using Dummy Response  */}
        <Item name={response[0].ItemName}></Item>
        <ItemDate day={response[0].ItemDay} month={response[1].ItemMonth} year={response[0].ItemYear}></ItemDate>

      </Card>

      <Products items={products} />
      <Products items={products} />
      <NewProduct printProduct={printProductData} />

    </div >
  );
}

export default App;
