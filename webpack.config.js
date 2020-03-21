const modules = {
  js: {
    laximo: {
      vehicle_by_vin_frame: {
        src: './src/js/laximo/vehicle_by_vin_frame/index.ts',
        dest: './build/js/',
        filename: 'laximoVehiclesByVinFrame.js'
      }
    }
  }
};
const path = require('path');


module.exports = {
  mode: 'production',
  entry: modules.js.laximo.vehicle_by_vin_frame.src,
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
    filename: modules.js.laximo.vehicle_by_vin_frame.filename,
    path: path.resolve(__dirname, modules.js.laximo.vehicle_by_vin_frame.dest),
  }
};