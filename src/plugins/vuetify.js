import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		disable: true
		// dark: true,
		// options: {
		// 	customProperties: true,
		// },
		// themes: {
		// 	dark: {
		// 		primary: '#555555',
		// 		secondary: '#424242',
		// 		accent: '#666666',
		// 		error: '#FF5252',
		// 		info: '#666666',
		// 		success: '#4CAF50',
		// 		warning: '#FFC107',
		// 	}
		// }
	}
});
