import { useCallback, useState } from "react";
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { List, StandardListItem, ListMode, Text, Toolbar, Title, TitleLevel, ToolbarSpacer, Select, Option } from '@ui5/webcomponents-react';

function App() {
  const sampleData = [
        {
          "ProductId": "HT-1000",
          "Name": "Notebook Basic 15",
          "ProductPicUrl": "images/HT-1000.jpg",
        },
        {
          "ProductId": "HT-1001",
          "Name": "Notebook Basic 17",
          "ProductPicUrl": "images/HT-1001.jpg",
        },
        {
          "ProductId": "HT-1002",
          "Name": "Notebook Basic 18",
          "ProductPicUrl": "images/HT-1002.jpg",
        },
        {
          "ProductId": "HT-1003",
          "Category": "Laptops",
          "Name": "Notebook Basic 19",
          "ProductPicUrl": "images/HT-1003.jpg",
        }
  ];
  const [selectedMode, setSelectedMode] = useState(ListMode.None);

  const onChangeMode = useCallback((event)=>{
    setSelectedMode(event.detail.selectedOption.dataset.id);
  },[]);

  return (
    <ThemeProvider>
      <div className="App">
        <List title={"Products"} mode={selectedMode}
          header={
            <Toolbar>
              <Title level={TitleLevel.H2}>Products</Title>
              <ToolbarSpacer/>
              <Select onChange={onChangeMode}>
                <Option key={ListMode.None} data-id={ListMode.None}>No Selection</Option>
                <Option key={ListMode.SingleSelect} data-id={ListMode.SingleSelect}>Single Select</Option>
                <Option key={ListMode.SingleSelectBegin} data-id={ListMode.SingleSelectBegin}>Single Select Left</Option>
                <Option key={ListMode.SingleSelectEnd} data-id={ListMode.SingleSelectEnd}>Single Select (Master)</Option>
                <Option key={ListMode.MultiSelect} data-id={ListMode.MultiSelect}>Multi Selection</Option>
					    </Select>
            </Toolbar>
          }>
        {sampleData.map((product)=>(
          <StandardListItem description={product.ProductId} image={product.ProductPicUrl}
            style={{ textAlign: 'left' }}>
            <Text>{product.Name}</Text>
          </StandardListItem>
        ))}
        </List>
      </div>
    </ThemeProvider>
  );
}

export default App;
