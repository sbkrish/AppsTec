import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CircularProgress } from '@material-ui/core';

class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    totalPages: 0,
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Fetch images from the API when the component mounts
    this.fetchImages();
    // Add a scroll event listener to trigger handleScroll when scrolling
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchImages = (page = 1) => {
    const API_KEY = 'ro48CsbY7wPrt2fDyPYq5STN0foSRGcYUAGjVmCjW_Y';
    const PER_PAGE = 5; // Number of images per page
    const URL = `https://api.unsplash.com/photos/random?count=${PER_PAGE}&page=${page}&client_id=${API_KEY}`;

    axios
      .get(URL)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data],
          currentPage: page,
          totalPages: response.headers['x-total'],
          loading: false,
          error: null,
        }));
      })
      .catch((error) => {
        this.setState({
          images: [],
          loading: false,
          error: 'Error fetching images',
        });
      });
  };

  handleScroll = () => {
    if (this.throttleTimeout) {
      // If there's a throttled scroll timeout, clear it
      clearTimeout(this.throttleTimeout);
    }

    // Set a new throttled scroll timeout with a delay of 200ms
    this.throttleTimeout = setTimeout(() => {
      const { loading, currentPage, totalPages } = this.state;
      const { innerHeight } = window;
      const { scrollHeight, scrollTop } = document.documentElement;
      const scrolledToBottom = innerHeight + scrollTop >= scrollHeight - 200;

      if (scrolledToBottom && !loading && currentPage < totalPages) {
        this.fetchImages(currentPage + 1);
      }
    }, 200);
  };

  render() {
    const { images, loading, error } = this.state;

    if (loading) {
      return <CircularProgress />;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        <h1>Image Gallery</h1>
        <Grid container spacing={2}>
          {images.map((image) => (
            <Grid key={image.id} item xs={6} sm={4} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt={image.alt_description}
                  image={image.urls.regular}
                  title={image.alt_description}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ImageGallery;
