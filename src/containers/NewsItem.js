import React from 'react';
import { connect } from 'react-redux';


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let NewsItem = ({ article }) => (
  article ?
    <article style={articleStyle} >
      <div>
        <h1>{article.task_todo}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h2>{article._id}</h2>
        
      </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.text,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


