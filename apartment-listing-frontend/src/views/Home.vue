import axiosInstance from '../axiosConfig';

//...
methods: {
  async fetchApartments() {
    try {
      const response = await axiosInstance.get('/apartments');
      this.apartments = response.data;
    } catch (error) {
      console.error('There was an error fetching the apartments!', error);
    }
  }
}
