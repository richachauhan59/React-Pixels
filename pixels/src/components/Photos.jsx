import React from 'react'
import axios from 'axios'
import Styles from './Photos.module.css'

class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value:"",
            page_no:15,
            data:"",
            isOpen: false
        }
    }
    
    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handleClick =()=>{
        axios.get(`https://api.pexels.com/v1/search`,{
            headers: {
              authorization: "563492ad6f917000010000017345b49ef98e449ca53af9e16c0acc5c"
            },
            params:{
                query:this.state.value,
                per_page:this.state.page_no
            }
            })
            .then(res=>res.data.photos)
            .then(res=>this.setState({data:res})).catch(err=>console.log(err))

            
    }
    componentDidMount(){
        axios.get(`https://api.pexels.com/v1/search`,{
            headers: {
              authorization: "563492ad6f917000010000017345b49ef98e449ca53af9e16c0acc5c"
            },
            params:{
                query:"gaming",
                per_page:this.state.page_no
            }
            })
            .then(res=>res.data.photos)
            .then(res=>this.setState({data:res})).catch(err=>console.log(err))
    }

  

    render(){
        console.log(this.props)
        console.log(this.state.data)

        const {data} = this.state

        return(
            
            <div className={Styles.main}>

                <div className={Styles.input_container}>
                    <h1>Pexels Photos</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search for Photos"></input>
                    <button type="button" onClick={this.handleClick} >Search</button>
                    <button type="button" style={{backgroundColor:"#EC407A"}} onClick={()=>this.props.handleChange("buttons")}>Home</button>
                </div>


                <div className={Styles.photo_container}>

                    <div className={Styles.flexContainer}>
                        {data!=="" && data.map((item,i)=> {
                            if(i<=4){
                                return (
                                    
                                    <div key={i} className={Styles.img}>
                                        <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                            <img  className={Styles.img} width="100%" src = {item.src.medium} alt="img">
                                            </img>  
                                        </a>
                                        <div className={Styles.details}>
                                                <a href={item.photographer_url} target="_blank" rel="noopener noreferrer">
                                                    <h3>{item.photographer}</h3>
                                                </a>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>

                    <div className={Styles.flexContainer}>
                        {data!=="" && data.map((item,i)=> {
                            if(i>4&&i<=9){
                                return (
                                    <div key={i}>
                                        <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                            <img  className={Styles.img} width="100%" src = {item.src.medium} alt="img">
                                            </img>  
                                        </a>
                                        <div className={Styles.details}>
                                                <a href={item.photographer_url} target="_blank" rel="noopener noreferrer">
                                                    <h3>{item.photographer}</h3>
                                                </a>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>

                    <div className={Styles.flexContainer}>
                        {data!=="" && data.map((item,i)=> {
                            if(i>9){
                                return (
                                    
                                    <div key={i}>
                                        <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                            <img  className={Styles.img} width="100%" src = {item.src.medium} alt="img">
                                            </img>  
                                        </a>
                                        <div className={Styles.details}>
                                                <a href={item.photographer_url} target="_blank" rel="noopener noreferrer">
                                                    <h3>{item.photographer}</h3>
                                                </a>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>

                </div>


            </div>
        )
    }
}
export default Photos