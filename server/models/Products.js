import mongoose, { Schema } from 'mongoose';

const ProductsModel = new Schema(
  {
    imageURL: {
      type: String,
    },
    videoURL: {
      type: String,
    },
    title: {
      type: String,
    },
    addres: {
      type: String,
    },
    features: {
      table_tennis: {
        type: String,
      },
      pool: {
        type: String,
      },
      bathhouse: {
        type: String,
      },
      images: [
        {
          type: String,
        },
      ],
    },
    persons_info: {
      type_house: {
        type: String,
      },
      floors: {
        type: Number,
      },
      house_area: {
        type: Number,
      },
      plot_size: {
        type: Number,
      },
      sleeping_places: {
        type: Number,
      },
      count_bedrooms: {
        type: Number,
      },
      max_persons: {
        type: Number,
      },
    },
    tariffs: {
      prices_info: [
        {
          id: {
            type: Number,
          },
          title: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
      ball: {
        type: Number,
      },
      options: [
        {
          id: {
            type: Number,
          },
          title: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
    },
    information: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Products', ProductsModel);
