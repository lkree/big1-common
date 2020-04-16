const modules = {
  js: {
    laximo: {
      vehicle_by_vin_frame: {
        src: './src/js/laximo/vehicle_by_vin_frame/index.ts',
        dest: './build/js/',
        filename: 'laximoVehiclesByVinFrame.js'
      },
      vehicles: {
        src: './src/js/laximo/vehicles/index.ts',
        dest: './build/js/',
        filename: 'laximoVehicles.js'
      }
    },
    customers: {
      dashboard: {
        src: './src/js/customers/dashboard/index.ts',
        dest: './build/js/',
        filename: 'customersDashboard.js'
      },
    },
  }
};
const path = require('path');
const {src, dest, filename} = modules.js.laximo.vehicle_by_vin_frame;


module.exports = {
  mode: 'production',
  entry: src,
  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ],
  },
  output: {
    filename: filename,
    path: path.resolve(__dirname, dest),
  }
};
