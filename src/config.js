// {
//   id: 101,
//   firstName: 'Sue',
//   lastName: 'Corson',
//   email: 'DWhalley@in.gov',
//   phone: '(612)211-6296',
//   address: {
//     streetAddress: '9792 Mattis Ct',
//     city: 'Waukesha',
//     state: 'WI',
//     zip: '22178'
//   },
//   description: 'et lacus magna dolor...',
// }

const CONFIG = {
  DATA_FIELDS: [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
  ],
  ADDRESS_FIELDS: [
    'streetAddress',
    'city',
    'state',
    'zip',
  ],
  DESCRIPTION_FIELD: 'description',
  DATA_OBJECT: {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: {
			streetAddress: '',
			city: '',
			state: '',
			zip: ''
		},
		description: '',
	},
  PAGE_ENTRIES_LIMIT: 50,
  FORM_FIELDS: [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'input',
    'input',
    'input',
    'input',
    'input',
  ],
};

export default CONFIG;
