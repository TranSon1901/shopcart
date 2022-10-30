import "../style/commonsection.css"
function CommonSecttion(props){
    return(
        <section className="common_Section">
            <h2>{props.title}</h2>
        </section>
    )
}
export default CommonSecttion