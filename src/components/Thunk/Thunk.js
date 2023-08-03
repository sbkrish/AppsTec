import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../../redux/actions'

class Thunk extends Component {
  // constructor(props) {
  //   super(props);

  // }
  componentDidMount() {
    this.props.fetchImages();
  }


  render() {
    const {images, loading, error} = this.props;
    if(loading) {
      return <p>loading....</p>
    }

    if(error) {
      return <p>{error}</p>
    } 

    return (
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
        ))}
      </div>
    )
  }
}

const stateToProps = (state) => (
  console.log(state),
  {
  images: state.images,
  loading: state.loading,
  error: state.error
})


const dispatchToProps = {
  fetchImages
};

export default connect(stateToProps, dispatchToProps)(Thunk);