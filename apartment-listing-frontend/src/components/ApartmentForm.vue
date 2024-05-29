import axiosInstance from '../axiosConfig';

export default {
  //...
  methods: {
    async submitForm() {
      const newApartment = {
        title: this.title,
        roomCount: Number(this.roomCount),
        floor: Number(this.floor),
        parkingSpace: this.parkingSpace,
        balcony: this.balcony,
        price: Number(this.price),
        location: this.location
      };
      try {
        const response = await axiosInstance.post('/apartments', newApartment);
        this.$emit('apartment-added', response.data);
        // Clear the form
        this.title = '';
        this.roomCount = '';
        this.floor = '';
        this.parkingSpace = false;
        this.balcony = false;
        this.price = '';
        this.location = '';
      } catch (error) {
        console.error('There was an error posting the apartment!', error);
      }
    }
  }
};
