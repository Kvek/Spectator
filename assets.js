import PropTypes from 'prop-types';

export const Logo = ({ width }) => (
  <svg
    viewBox='0 0 247 56'
    aria-label='The Spectator'
    fill='#d30d1d'
    width={width}
  >
    <path
      d='M244.413345,54.0471254 L247,54.0471254 L247,55.1555137 L237.761946,55.1555137 L236.336646,53.0442978 L225.514926,37.3157399 L222.928271,33.5155514 L222.928271,33.2516494 L225.039826,33.2516494 C232.430269,33.0405278 235.650391,30.137606 235.650391,23.5400566 C235.650391,18.5259189 232.747003,16.1508011 230.741025,15.5174364 C229.843614,15.200754 227.837637,15.0951932 226.412337,15.0951932 L222.717116,15.0951932 L222.717116,54.0471254 L227.098593,54.0471254 L227.098593,55.1555137 L212.264917,55.1555137 L212.264917,54.0471254 L216.646394,54.0471254 L216.646394,15.0951932 L212.212129,15.0951932 L212.212129,13.9868049 L228.15437,13.9868049 C232.483058,14.3034873 236.864535,14.4618285 240.084657,17.8925542 C241.519644,19.4851028 242.31005,21.5548795 242.30179,23.6983977 C242.30179,25.4929312 241.82669,28.8180961 237.973102,31.2987747 C236.17828,32.5127238 233.486047,33.4099906 229.843614,33.7794533 L244.413345,54.0471254 Z M198.48702,14.4090481 C194.158332,14.4090481 188.985022,15.8341188 188.985022,34.5183789 C188.985022,53.0442978 194.211121,54.7332705 198.48702,54.7332705 C202.762919,54.7332705 207.88344,53.3081998 207.88344,34.6239397 C207.936229,16.0980207 202.71013,14.4090481 198.48702,14.4090481 L198.48702,14.4090481 Z M198.48702,13.195099 C207.725074,13.195099 214.640417,22.1149859 214.640417,34.6239397 C214.640417,47.1328935 207.725074,55.9472196 198.48702,55.9472196 C189.143388,55.9472196 182.280834,47.0273327 182.280834,34.5183789 C182.280834,22.0094251 189.196177,13.195099 198.48702,13.195099 L198.48702,13.195099 Z M148.971051,37.2629595 L143.269852,18.9481621 L137.25192,37.2629595 L148.971051,37.2629595 Z M136.829609,38.4241282 L131.709088,54.0471254 L137.515864,54.0471254 L137.515864,55.1555137 L114.65828,55.1555137 L114.65828,54.0471254 L119.567645,54.0471254 L119.567645,15.0951932 C118.299759,15.0489847 117.030212,15.0842442 115.766846,15.200754 C113.549713,15.5174364 113.074613,17.1008483 112.75788,17.8925542 C112.28278,19.3704053 111.860469,20.795476 111.543736,22.2205467 C111.227003,23.6456173 110.85748,25.33459 110.435169,26.9180019 L109.326603,26.9180019 L109.326603,13.9868049 L136.248931,13.9868049 L136.248931,26.9180019 L135.140365,26.9180019 C134.718054,25.33459 134.454109,23.6983977 134.031798,22.2205467 C133.609487,20.9010368 133.345543,19.4231857 132.923232,17.8925542 C132.633812,16.4242353 131.405842,15.3257024 129.914266,15.200754 C128.456561,15.0902475 126.994125,15.0550138 125.532789,15.0951932 L125.532789,54.0471254 L130.336577,54.0471254 L143.481008,13.9868049 L147.387385,13.9868049 L160.215083,54.0471254 L165.335604,54.0471254 L165.335604,15.0951932 C163.87427,15.0539584 162.411779,15.0891935 160.954127,15.200754 C158.736994,15.5174364 158.261894,17.1008483 157.945161,17.8925542 C157.470061,19.3704053 157.04775,20.795476 156.731016,22.2205467 C156.414283,23.6456173 156.044761,25.33459 155.62245,26.9180019 L154.513884,26.9180019 L154.513884,13.9868049 L182.122467,13.9868049 L182.122467,26.9180019 L181.119479,26.9180019 C180.697168,25.33459 180.327646,23.6983977 179.905334,22.2205467 C179.483023,20.9010368 179.219079,19.4231857 178.796768,17.8925542 C178.507348,16.4242353 177.279378,15.3257024 175.787802,15.200754 C174.312451,15.090593 172.832459,15.0553607 171.353536,15.0951932 L171.353536,54.0471254 L176.474057,54.0471254 L176.474057,55.1555137 L148.918262,55.1555137 L148.918262,54.0471254 L154.144361,54.0471254 L149.340573,38.4241282 L136.829609,38.4241282 Z M106.687159,26.9180019 C105.895326,22.9066918 104.786759,17.8925542 102.991937,15.9924599 C101.988949,14.8840716 100.563649,14.0923657 98.0825716,14.0923657 C90.5865508,14.0923657 87.1552736,20.4787936 87.1552736,34.7295005 C87.1552736,36.9462771 87.0496959,45.5494816 89.9530842,50.4580584 C90.6411788,51.6974278 91.6422613,52.7347466 92.8564726,53.466541 C94.2463998,54.2985276 95.8294593,54.7533567 97.4491051,54.7860509 C98.6248275,54.7655181 99.7872015,54.5330807 100.880382,54.0999057 C103.36146,52.9915174 104.681182,50.66918 105.578592,47.7662582 C106.416378,45.331463 107.017432,42.82158 107.373414,40.271442 L108.481981,40.271442 L108.481981,53.3081998 C107.711194,53.7859052 106.89839,54.1922418 106.053692,54.5221489 C103.55856,55.4771383 100.912545,55.9776553 98.2409383,56 C94.3345612,56 92.0118505,54.9971725 90.7449174,54.3110273 C86.7329626,52.1998115 80.6094526,46.7106503 80.6094526,34.9934025 C80.6094526,21.5871819 88.8445178,12.8784166 98.346516,12.8784166 C101.524751,12.8797387 104.6873,13.3238456 107.742937,14.1979265 L107.742937,26.9180019 L106.687159,26.9180019 Z M78.6562641,40.2186616 L79.7648305,40.2186616 L79.7648305,55.1555137 L50.8893136,55.1555137 L50.8893136,54.0471254 L54.7956907,54.0471254 L54.7956907,15.0951932 L50.8893136,15.0951932 L50.8893136,13.9868049 L79.3425195,13.9868049 L79.3425195,26.9180019 L78.233953,26.9180019 C77.5476976,24.5956645 76.9142311,22.2205467 76.1223979,20.00377 C75.4361424,17.998115 74.9082536,17.1008483 74.327576,16.5202639 C73.3245873,15.6229972 71.8992875,15.3063148 69.2070547,15.0951932 L60.8664118,15.0951932 L60.8664118,33.0405278 L64.6672111,33.0405278 C65.9869331,32.934967 66.6731885,32.7238454 67.5705994,31.9321395 C69.048688,30.6126296 69.4709991,28.5014138 70.36841,24.9123468 L71.4769765,24.9123468 L71.4769765,42.1187559 L70.36841,42.1187559 C69.946099,40.799246 69.7877324,39.6380773 69.3654213,38.3185674 C69.1097177,37.2157754 68.6040122,36.1864689 67.8873327,35.3100848 C66.884344,34.2016965 65.7757775,34.0961357 64.1921112,34.0961357 L60.8664118,34.0961357 L60.8664118,54.0471254 L69.3654213,54.0471254 C70.4247538,54.0952921 71.4831743,53.933864 72.4799652,53.5721018 C74.9082536,52.4637135 75.9112424,49.1385485 76.5974978,47.1856739 C77.4064324,44.9013517 78.0936526,42.5757495 78.6562641,40.2186616 L78.6562641,40.2186616 Z M36.5835273,15.0951932 L34.1552389,15.0951932 L34.1552389,33.9377945 L39.0646046,33.9377945 C43.6572371,33.9377945 46.5606255,30.5070688 46.5606255,25.33459 C46.5606255,18.4203582 43.3932927,15.0951932 36.5835273,15.0951932 L36.5835273,15.0951932 Z M39.0646046,35.0461828 L34.1552389,35.0461828 L34.1552389,54.0999057 L39.1701824,54.0999057 L39.1701824,55.2082941 L24.2309296,55.2082941 L24.2309296,54.0999057 L28.1373066,54.0999057 L28.1373066,15.0951932 L25.0227628,15.0951932 L25.0227628,13.9868049 L37.2697827,13.9868049 C47.194092,13.9868049 52.7897132,17.7869934 52.7897132,24.5956645 C52.7897132,30.7181904 47.194092,35.0461828 39.0646046,35.0461828 L39.0646046,35.0461828 Z M24.2309296,48.9802074 C21.6442745,53.7832234 16.7349087,55.9472196 11.4032319,55.9472196 C7.07454381,55.9472196 4.01278881,54.7332705 0.159200629,52.8331762 L0.159200629,39.7436381 L1.26776709,39.7436381 C1.84844477,42.1715363 2.37633356,44.4410933 3.06258899,46.9745523 C3.49102078,48.7159312 4.20449582,50.3744941 5.17414416,51.8831291 C6.0715551,53.202639 8.07753252,54.7860509 11.8783318,54.7860509 C13.3564204,54.7860509 17.5795308,54.4693685 20.113397,50.5636192 C20.9743023,49.1477707 21.430735,47.5231314 21.433119,45.866164 C21.447351,44.134675 20.8907875,42.4467038 19.8494526,41.063148 C19.4071069,40.3946225 18.8741377,39.7906878 18.2657862,39.2686145 C16.0486533,37.5796418 13.4619982,36.6823751 8.55263243,34.7822809 C6.12434398,33.8850141 5.3325108,33.0933082 4.22394433,32.3543827 C2.74585571,31.4571159 0.000833991281,28.9236569 0.000833991281,24.2262017 C-0.0244178633,22.1809611 0.524225131,20.1695934 1.58450037,18.4203582 C3.59047778,14.9896324 8.60542131,12.8256362 13.4092093,12.8256362 C17.4211641,12.8256362 19.6382971,13.2478794 23.3335186,14.1451461 L23.3335186,27.2874647 L22.2249522,27.2874647 C21.3275412,23.1705938 20.4301303,18.1564562 18.6353084,16.2563619 C17.6323197,15.2535344 16.154231,14.0395853 12.8285316,14.0395853 C9.60841001,14.0395853 6.81059941,14.936852 5.01577752,17.5230914 C4.10564972,18.744249 3.60659702,20.2226861 3.59047778,21.7455231 C3.60353187,22.9594661 3.95053581,24.146394 4.59346649,25.1762488 C6.17713286,27.6569274 8.81657683,28.395853 11.5088097,29.6098021 C12.5117984,30.0320452 13.6203648,30.401508 14.5177758,30.8237512 C17.3155864,31.9321395 19.9022415,32.8294062 22.3305299,34.9406221 C23.6502519,36.0490104 25.7618071,38.529689 25.7618071,43.1743638 C25.738027,45.2062361 25.212128,47.2007048 24.2309296,48.9802074 L24.2309296,48.9802074 Z M127.591555,11.1366635 L128.700122,11.1366635 L128.700122,0.422243167 L127.591555,0.422243167 L127.591555,0 L135.615465,0 L135.615465,3.58906692 L135.193154,3.58906692 C134.190165,0.791705938 134.190165,0.369462771 133.398332,0.369462771 L130.389366,0.369462771 L130.389366,5.27803959 L131.497932,5.27803959 C132.289765,5.27803959 132.606499,5.066918 133.081599,3.27238454 L133.50391,3.27238454 L133.50391,7.70593779 L133.081599,7.70593779 C132.500921,5.91140434 132.289765,5.70028275 131.497932,5.70028275 L130.389366,5.70028275 L130.389366,11.0838831 L133.609487,11.0838831 C134.190165,11.0838831 134.401321,10.7672008 135.509887,7.38925542 L135.932198,7.38925542 L135.932198,11.5061263 L127.591555,11.5061263 L127.591555,11.1366635 Z M116.822624,11.1366635 L117.93119,11.1366635 L117.93119,0.422243167 L116.822624,0.422243167 L116.822624,0 L120.729001,0 L120.729001,0.422243167 L119.620434,0.422243167 L119.620434,5.33081998 L124.001911,5.33081998 L124.001911,0.422243167 L122.893345,0.422243167 L122.893345,0 L126.799722,0 L126.799722,0.422243167 L125.691155,0.422243167 L125.691155,11.1366635 L126.799722,11.1366635 L126.799722,11.5589067 L122.893345,11.5589067 L122.893345,11.1366635 L124.001911,11.1366635 L124.001911,5.70028275 L119.620434,5.70028275 L119.620434,11.0838831 L120.729001,11.0838831 L120.729001,11.5061263 L116.822624,11.5061263 L116.822624,11.1366635 Z M115.555691,3.58906692 C114.552702,0.580584354 114.447124,0.369462771 113.549713,0.369462771 L112.863458,0.369462771 L112.863458,11.0838831 L114.447124,11.0838831 L114.447124,11.5061263 L109.537758,11.5061263 L109.537758,11.0838831 L111.121425,11.0838831 L111.121425,0.422243167 L110.435169,0.422243167 C109.537758,0.422243167 109.432181,0.63336475 108.429192,3.64184731 L108.006881,3.64184731 L108.006881,0 L115.925213,0 L115.925213,3.58906692 L115.555691,3.58906692 Z'
      id='Shape'
    />
  </svg>
);

Logo.propTypes = {
  width: PropTypes.string
};

Logo.defaultProps = {
  width: '100%'
};

export const HamburgerIcon = ({ width, height, onClick }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
  >
    <path
      d='M0.427436 0.854872H15.5726C15.8087 0.854872 16 0.663594 16 0.427436C16 0.191278 15.8087 0 15.5726 0H0.427436C0.191278 0 0 0.191278 0 0.427436C0 0.663594 0.191278 0.854872 0.427436 0.854872Z'
      fill='#1E283C'
    />
    <path
      d='M15.5726 7.57257H0.427436C0.191278 7.57257 0 7.76385 0 8.00001C0 8.23617 0.191278 8.42744 0.427436 8.42744H15.5726C15.8087 8.42744 16 8.23617 16 8.00001C16 7.76385 15.8087 7.57257 15.5726 7.57257Z'
      fill='#1E283C'
    />
    <path
      d='M15.5726 15.1451H0.427436C0.191278 15.1451 0 15.3364 0 15.5726C0 15.8087 0.191278 16 0.427436 16H15.5726C15.8087 16 16 15.8087 16 15.5726C16 15.3364 15.8087 15.1451 15.5726 15.1451Z'
      fill='#1E283C'
    />
  </svg>
);

HamburgerIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

HamburgerIcon.defaultProps = {
  width: '100%',
  height: '100%'
};

export const BookMarkList = ({ width, height, onClick }) => (
  <svg width={width} height={height} viewBox='0 0 100 100' onClick={onClick}>
    <g transform='translate(0,-952.36218)'>
      <path
        fill='#000000'
        d='m29.188,960.3c-3.8801,0-9.6891,1.1512-14.656,2.2812-4.9672,1.13-9.0312,2.25-9.0312,2.25a1.5002,1.5002,0,0,0,-1.0938,1.4688v76.594a1.5002,1.5002,0,0,0,1.9062,1.4375s3.9841-1.106,8.875-2.2187c4.8909-1.1126,10.749-2.1875,14-2.1875,3.2511,0,8.423,1.0789,12.688,2.1875,4.0283,1.0473,7.0587,2.0433,7.4062,2.1562,0.0024,0.0008,0.02915-0.0007,0.03125,0a1.5002,1.5002,0,0,0,0.21875,0.062,1.5002,1.5002,0,0,0,0.0625,0.031,1.5002,1.5002,0,0,0,0.09375,0.031,1.5002,1.5002,0,0,0,0.03125,0,1.5002,1.5002,0,0,0,0.09375,0,1.5002,1.5002,0,0,0,0.0625,0.031,1.5002,1.5002,0,0,0,0.09375,0,1.5002,1.5002,0,0,0,0.0625,0,1.5002,1.5002,0,0,0,0.375,-0.062,1.5002,1.5002,0,0,0,0.1875,-0.062,1.5002,1.5002,0,0,0,0.15625,-0.062c0.39558-0.1284,3.3826-1.0871,7.375-2.125,4.2645-1.1086,9.4364-2.1875,12.688-2.1875,3.2511,0,9.1091,1.0749,14,2.1875,4.8909,1.1127,8.875,2.2187,8.875,2.2187a1.5002,1.5002,0,0,0,1.9062,-1.4375v-76.594a1.5002,1.5002,0,0,0,-1.0938,-1.4688s-4.0641-1.12-9.0312-2.25c-4.9672-1.13-10.776-2.2812-14.656-2.2812s-9.1068,1.1472-13.469,2.2812c-4.102,1.0664-6.9642,2.0328-7.3438,2.1562-0.37955-0.12342-3.2418-1.0898-7.3438-2.1562-4.3619-1.134-9.5887-2.2812-13.469-2.2812zm0,3c3.2511,0,8.423,1.0788,12.688,2.1875,3.2754,0.85153,5.5206,1.5567,6.625,1.9062v73.5c-1.2601-0.4009-3.0894-0.9714-5.8438-1.6875-4.3619-1.134-9.5887-2.2812-13.469-2.2812-3.88,0-9.6891,1.1512-14.656,2.2812-3.9195,0.8917-5.8821,1.4449-7.125,1.7813v-73.531c0.82548-0.22594,3.4941-0.96219,7.7812-1.9375,4.8909-1.1127,10.749-2.2188,14-2.2188zm41.625,0c3.2511,0,9.1091,1.1061,14,2.2188,4.2871,0.97531,6.9558,1.7116,7.7812,1.9375v73.531c-1.2429-0.3364-3.2055-0.8896-7.125-1.7813-4.9672-1.13-10.776-2.2812-14.656-2.2812s-9.1068,1.1472-13.469,2.2812c-2.7544,0.7161-4.5836,1.2866-5.8438,1.6875v-73.5c1.1044-0.34958,3.3496-1.0547,6.625-1.9062,4.2645-1.1087,9.4364-2.1875,12.688-2.1875z'
      />
    </g>
  </svg>
);

BookMarkList.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

BookMarkList.defaultProps = {
  width: '100%',
  height: '100%'
};

export const CloseIcon = ({ width, height, onClick, color }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
  >
    <path
      d='M8.60425 8L15.8739 0.729847C16.0406 0.563147 16.0406 0.292259 15.8739 0.125559C15.7072 -0.0411407 15.4364 -0.0411407 15.2697 0.125559L7.99947 7.39571L0.729798 0.125025C0.563109 -0.041675 0.29224 -0.041675 0.125551 0.125025C-0.041138 0.291725 -0.041138 0.562613 0.125551 0.729313L7.39575 8L0.125017 15.2707C-0.0416722 15.4374 -0.0416722 15.7083 0.125017 15.875C0.208361 15.9583 0.317884 16 0.427408 16C0.536931 16 0.64592 15.9583 0.729798 15.875L8 8.60429L15.2702 15.875C15.3535 15.9583 15.4631 16 15.5726 16C15.6821 16 15.7911 15.9583 15.875 15.875C16.0417 15.7083 16.0417 15.4374 15.875 15.2707L8.60425 8Z'
      fill={color}
    />
  </svg>
);

CloseIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string
};

CloseIcon.defaultProps = {
  width: '100%',
  height: '100%',
  onClick: null,
  color: 'black'
};

export const SearchIcon = ({ width, height }) => (
  <svg
    fill='none'
    height={height}
    viewBox='0 0 24 24'
    width={width}
    xmlns='http://www.w3.org/2000/svg'
  >
    <clipPath id='a'>
      <path d='m0 0h24v23.996h-24z' />
    </clipPath>
    <g clipPath='url(#a)'>
      <path
        d='m23.8125 22.9013-6.7666-6.7666c1.5588-1.7744 2.4107-4.0273 2.4107-6.41075 0-2.59828-1.0122-5.04188-2.8491-6.87878-3.7932-3.793233-9.96514-3.793233-13.75837 0-1.83691 1.8369-2.84913 4.2805-2.84913 6.87878 0 2.59825 1.01222 5.04185 2.84913 6.87875 1.8369 1.8369 4.2805 2.8492 6.87878 2.8492 2.38349 0 4.63639-.852 6.41069-2.4108l6.7666 6.7666c.1251.125.2893.1875.4536.1875s.3278-.0625.4537-.1875c.2508-.2501.2508-.6556 0-.9064zm-20.05614-7.205c-1.59567-1.5957-2.47405-3.7163-2.47405-5.97235 0-2.25606.87838-4.37668 2.47405-5.97235 1.64616-1.64617 3.80926-2.47005 5.97235-2.47005s4.32539.82308 5.97239 2.47005c1.5948 1.59487 2.474 3.71629 2.474 5.97235 0 2.25605-.8784 4.37665-2.474 5.97235-1.5957 1.5957-3.7163 2.4741-5.97239 2.4741-2.25606 0-4.37748-.8792-5.97235-2.4741z'
        fill='#000'
      />
    </g>
  </svg>
);

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

SearchIcon.defaultProps = {
  width: '100%',
  height: '100%'
};