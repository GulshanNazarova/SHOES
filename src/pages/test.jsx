const [fil,setFil]=useState()
  
  
const filterCategory = (categoryName) => {
  const filerData=myData.filter((item)=>item.category==categoryName)
  setFil(filerData)
}
{/* category Botton */}
<div>
  <button className="btn btn-primary me-2" onClick={()=>filterCategory('Sneaker')}>Sneaker</button>
  {/* <button className="btn btn-primary me-2" onClick={()=>filterCategory('Boot')}>Boot</button>
  <button className="btn btn-primary me-2" onClick={()=>filterCategory('Mule')}>Mule</button>
  <button className="btn btn-primary me-2" onClick={()=>filterCategory('Flat')}>Flat</button>
  <button className="btn btn-primary me-2" onClick={()=>filterCategory('Mary Janes')}>Mary Janes</button>
  <button className="btn btn-primary me-2" onClick={()=>filterCategory('Stilettos')}>Stilettos</button> */}
</div>
{/* {myData
  .filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.title.toLocaleLowerCase().includes(search);
  })
  .map((item, index) => {
    return <BestsellersCard bestsellers={item} key={index} />;
  })
  } */}
  {/* {
    (fil ?  fil :  myData).map((item,index)=>{
      return <BestsellersCard bestsellers={item} key={index} />;

    }
    )
  } */}









  map((item, index) => {
    return <BestsellersCard bestsellers={item} key={index} />;
  })