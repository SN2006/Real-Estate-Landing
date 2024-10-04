import styles from "./Logo.module.css"
import PropTypes from "prop-types";

const Logo = ({mainGap, gap, logoWidth, logoHeight, realWidth, realHeight, estateWidth, estateHeight}) => {
    return <div className={styles.logoBox} style={{gap: mainGap + "px"}}>
        <div className={styles.firstRow} style={{gap: gap + "px"}}>
            <svg width={logoWidth} height={logoHeight} viewBox="0 0 125 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3149 30.8785V206.61H56.1162V4.73718L20.3149 30.8785Z" stroke="url(#paint0_linear_315_2359)"
                      stroke-width="2.21" stroke-miterlimit="10"/>
                <path d="M38.2156 206.61V58.8885L2.41431 85.0298V206.61H38.2156Z" stroke="url(#paint1_linear_315_2359)"
                      stroke-width="2.21" stroke-miterlimit="10"/>
                <path d="M104.707 30.8785V206.61H68.8838V4.73718L104.707 30.8785Z" stroke="url(#paint2_linear_315_2359)"
                      stroke-width="2.21" stroke-miterlimit="10"/>
                <path d="M86.7844 206.61V58.8885L122.607 85.0298V206.61H86.7844Z" stroke="url(#paint3_linear_315_2359)"
                      stroke-width="2.21" stroke-miterlimit="10"/>
                <defs>
                    <linearGradient id="paint0_linear_315_2359" x1="17.9006" y1="104.5" x2="58.5305" y2="104.5"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F4D68E"/>
                        <stop offset="0.23" stop-color="#EACD8A"/>
                        <stop offset="0.41" stop-color="#FAECAF"/>
                        <stop offset="0.59" stop-color="#FAECAE"/>
                        <stop offset="0.77" stop-color="#FBF8D0"/>
                        <stop offset="1" stop-color="#FAEDB3"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_315_2359" x1="3.50296e-06" y1="131.576" x2="40.6299" y2="131.576"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F4D68E"/>
                        <stop offset="0.23" stop-color="#EACD8A"/>
                        <stop offset="0.41" stop-color="#FAECAF"/>
                        <stop offset="0.59" stop-color="#FAECAE"/>
                        <stop offset="0.77" stop-color="#FBF8D0"/>
                        <stop offset="1" stop-color="#FAEDB3"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_315_2359" x1="107.099" y1="104.5" x2="66.4912" y2="104.5"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F4D68E"/>
                        <stop offset="0.23" stop-color="#EACD8A"/>
                        <stop offset="0.41" stop-color="#FAECAF"/>
                        <stop offset="0.59" stop-color="#FAECAE"/>
                        <stop offset="0.77" stop-color="#FBF8D0"/>
                        <stop offset="1" stop-color="#FAEDB3"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_315_2359" x1="125.022" y1="131.576" x2="84.3919" y2="131.576"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F4D68E"/>
                        <stop offset="0.23" stop-color="#EACD8A"/>
                        <stop offset="0.41" stop-color="#FAECAF"/>
                        <stop offset="0.59" stop-color="#FAECAE"/>
                        <stop offset="0.77" stop-color="#FBF8D0"/>
                        <stop offset="1" stop-color="#FAEDB3"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg width={realWidth} height={realHeight} viewBox="0 0 374 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.71857 12.5589C8.71857 10.1099 8.26125 8.18486 7.33186 6.80981C6.41722 5.42165 4.49943 4.60971 1.59324 4.36089C1.03266 4.29542 0.619594 4.0466 0.368806 3.60134C0.118018 3.15608 0 2.68463 0 2.187C0 1.68936 0.13277 1.2441 0.383558 0.864321C0.634346 0.484544 1.03266 0.327394 1.60799 0.392873C5.22229 0.576214 8.43828 0.733364 11.2707 0.864321C14.1031 0.995279 16.9651 1.04766 19.8713 1.04766C24.828 1.04766 29.7257 0.877417 34.5792 0.523831C39.4327 0.183341 44.3009 0 49.1839 0C54.0669 0 58.3156 0.327395 62.3577 0.995279C66.3998 1.65007 69.8961 2.8025 72.876 4.43947C75.856 6.07644 78.2016 8.27653 79.9423 11.0397C81.6831 13.803 82.5387 17.3257 82.5387 21.5949C82.5387 24.9867 82.0076 28.0119 80.9455 30.6441C79.8833 33.2764 78.3638 35.6074 76.3723 37.6242C74.3955 39.6409 72.0646 41.3303 69.4092 42.7184C66.7538 44.1066 63.8329 45.2328 60.6464 46.1102C63.6264 47.2365 66.0752 48.6901 68.0225 50.4449C69.9698 52.1998 71.5778 54.1118 72.8613 56.1547C74.1299 58.1976 75.1626 60.3323 75.9445 62.5716C76.7263 64.7979 77.4344 66.9587 78.0688 69.0279C78.6294 70.7827 79.19 72.459 79.721 74.0304C80.2521 75.6019 80.9012 76.9639 81.6831 78.1294C82.465 79.295 83.3796 80.2247 84.4417 80.9057C85.5039 81.5998 86.8464 81.9403 88.4839 81.9403C89.0444 81.9403 89.4723 82.1498 89.7526 82.5558C90.0329 82.9618 90.1804 83.4201 90.1804 83.9178C90.1804 84.4154 90.0329 84.8738 89.7526 85.2797C89.4723 85.6857 89.0444 85.8952 88.4839 85.8952C86.3595 85.8952 84.3975 85.9083 82.583 85.9476C80.7832 85.9738 79.0867 86 77.5377 86C73.5694 86 70.3091 85.6595 67.7717 84.9654C65.2196 84.2714 63.0658 83.0796 61.2955 81.3772C59.5252 79.6747 57.991 77.3699 56.6781 74.4495C55.3651 71.5292 53.9636 67.8361 52.4884 63.3705C52.0606 62.2442 51.6033 60.9347 51.1017 59.4548C50.6001 57.975 50.0396 56.5345 49.4052 55.1201C48.7709 53.7058 48.048 52.3831 47.2219 51.1652C46.4105 49.9342 45.5106 49.0437 44.5075 48.4806C40.1113 48.9782 35.6266 49.083 31.0239 48.7687V73.7554C31.0239 76.5841 31.7468 78.5747 33.2073 79.7402C34.653 80.9057 37.3379 81.6391 41.2325 81.9534C41.7931 82.0189 42.2209 82.2677 42.5012 82.713C42.7815 83.1582 42.929 83.6297 42.929 84.1273C42.929 84.6249 42.7815 85.0702 42.5012 85.45C42.2209 85.8297 41.7931 85.9869 41.2325 85.9214C37.9722 85.6726 34.6972 85.5154 31.4075 85.45C28.1177 85.3845 24.7985 85.3583 21.4792 85.3583C18.16 85.3583 14.7522 85.3845 11.492 85.45C8.23174 85.5154 4.942 85.6726 1.60799 85.9214C1.04741 85.9869 0.634346 85.8297 0.383558 85.45C0.13277 85.0702 0.0147522 84.638 0.0147522 84.1273C0.0147522 83.6166 0.13277 83.1582 0.383558 82.713C0.634346 82.2808 1.03266 82.0189 1.60799 81.9534C4.51418 81.6391 6.41722 80.801 7.34661 79.4521C8.26125 78.1032 8.73332 76.2043 8.73332 73.7423V12.5589H8.71857ZM31.0239 12.4541V46.3067C35.9069 46.2412 40.1998 45.6126 43.8731 44.4209C47.5612 43.2292 50.6591 41.5398 53.167 39.379C55.6749 37.2051 57.5632 34.5991 58.8024 31.5477C60.0416 28.4964 60.6317 25.0915 60.5579 21.3199C60.5579 18.871 60.2186 16.5531 59.5547 14.3923C58.8761 12.2184 57.8582 10.3326 56.4715 8.73489C55.0848 7.1372 53.2998 5.85381 51.1017 4.91092C48.9036 3.96802 46.2187 3.49657 43.0322 3.49657C39.5655 3.49657 36.6888 4.11208 34.4317 5.32998C32.1746 6.54789 31.0387 8.93132 31.0387 12.4541H31.0239ZM105.493 12.5589C105.493 10.1099 105.051 8.21105 104.165 6.84909C103.28 5.50023 101.392 4.6621 98.4859 4.3478C97.9253 4.28232 97.4975 4.0335 97.2172 3.58824C96.9369 3.14299 96.7894 2.67154 96.7894 2.1739C96.7894 1.72864 96.9369 1.32267 97.2172 0.942896C97.4975 0.563119 97.9253 0.405969 98.4859 0.471448C101.953 0.720268 105.11 0.890513 107.942 0.995279C110.774 1.08695 113.607 1.10005 116.439 1.04766C122.104 0.982184 127.164 0.942896 131.634 0.903609C136.089 0.877417 140.471 0.83813 144.749 0.811938C149.027 0.785747 153.482 0.733364 158.085 0.667885C162.688 0.602406 167.925 0.536927 173.811 0.484544C175.581 0.484544 176.54 1.17862 176.673 2.55368C176.746 4.05969 176.835 5.69666 176.938 7.4515C177.041 9.20633 177.174 11.0397 177.307 12.9255C177.455 14.8113 177.587 16.684 177.735 18.5305C177.882 20.3901 178.059 22.1319 178.266 23.7688C178.34 24.2665 178.163 24.6201 177.735 24.8034C177.307 24.9867 176.82 25.0915 176.245 25.0915C175.67 25.0915 175.197 25.0129 174.814 24.8558C174.43 24.6986 174.165 24.3974 174.017 23.9653C173.309 19.8794 171.834 16.5924 169.606 14.1173C167.379 11.6291 164.679 9.71707 161.537 8.3682C158.38 7.01934 154.898 6.11573 151.078 5.68357C147.257 5.23831 143.318 5.02878 139.291 5.02878C135.543 5.02878 132.682 5.5919 130.734 6.73123C128.787 7.85747 127.813 9.80874 127.813 12.5719V38.3183C127.813 39.7064 128.167 40.5969 128.875 41.0029C129.584 41.4089 130.749 41.6184 132.387 41.6184H143.642C146.401 41.6184 148.673 41.4351 150.443 41.0553C152.214 40.6755 153.615 40.0862 154.633 39.2612C155.666 38.4492 156.418 37.3492 156.919 35.961C157.421 34.5729 157.805 32.9097 158.085 30.9584C158.232 30.081 158.97 29.6358 160.312 29.6358C160.873 29.6358 161.375 29.7798 161.802 30.0548C162.23 30.3429 162.407 30.6965 162.334 31.1418C161.979 33.3419 161.773 35.4372 161.699 37.4146C161.625 39.3921 161.596 41.3958 161.596 43.3994C161.596 45.4031 161.625 47.4067 161.699 49.3842C161.773 51.3616 161.979 53.457 162.334 55.6571C162.407 56.1547 162.23 56.5345 161.802 56.7833C161.375 57.0321 160.888 57.1631 160.312 57.1631C158.97 57.1631 158.218 56.7178 158.085 55.8404C157.805 53.8891 157.406 52.2391 156.919 50.8902C156.418 49.5413 155.666 48.4544 154.633 47.6424C153.6 46.8305 152.214 46.2281 150.443 45.8483C148.673 45.4685 146.401 45.2852 143.642 45.2852H132.387C130.764 45.2852 129.584 45.4947 128.875 45.9007C128.167 46.3067 127.813 47.2103 127.813 48.5853V73.7554C127.813 76.5186 128.846 78.4699 130.897 79.5962C132.947 80.7224 135.883 81.2986 139.718 81.2986C144.454 81.2986 148.865 81.076 152.936 80.6438C157.008 80.2117 160.637 79.2033 163.824 77.6318C167.01 76.1913 169.68 74.2269 171.849 71.7387C174.003 69.2505 175.448 66.1337 176.156 62.3621C176.304 61.9169 176.569 61.6287 176.953 61.4716C177.337 61.3144 177.823 61.2359 178.384 61.2359C178.945 61.2359 179.446 61.3275 179.874 61.524C180.302 61.7204 180.479 62.0609 180.405 62.5585C180.198 64.1955 180.021 65.9372 179.874 67.7969C179.726 69.6565 179.594 71.5161 179.446 73.4018C179.299 75.2876 179.181 77.108 179.077 78.8759C178.974 80.6307 178.886 82.2677 178.812 83.7737C178.664 85.2142 177.72 85.9476 175.95 85.9476C170.064 85.8821 164.797 85.8167 160.121 85.7643C155.444 85.6988 150.886 85.6333 146.416 85.5809C141.961 85.5154 137.373 85.4762 132.667 85.4369C127.961 85.4107 122.591 85.3583 116.572 85.2928C113.666 85.2273 110.819 85.2797 108.016 85.4369C105.213 85.594 102.056 85.7643 98.5154 85.9607C97.9548 86.0262 97.527 85.869 97.2467 85.4893C96.9664 85.1095 96.8189 84.6773 96.8189 84.1666C96.8189 83.6559 96.9664 83.1975 97.2467 82.7522C97.527 82.3201 97.9548 82.0582 98.5154 81.9927C101.422 81.6784 103.31 80.8402 104.195 79.4914C105.08 78.1425 105.523 76.2436 105.523 73.7816V12.5589H105.493ZM228.379 1.80722C228.733 0.798843 229.368 0.366682 230.297 0.484544C231.433 0.615502 232.584 0.707172 233.749 0.772651C234.914 0.83813 236.065 0.864321 237.201 0.864321C238.898 0.864321 240.594 0.811938 242.305 0.720268C244.002 0.628597 245.669 0.550023 247.292 0.484544C248.428 0.484544 249.136 0.890513 249.416 1.71555L277.357 73.4673C277.784 74.659 278.212 75.746 278.625 76.7151C279.053 77.6842 279.54 78.5485 280.115 79.308C280.676 80.0676 281.428 80.6569 282.343 81.1022C283.258 81.5474 284.438 81.8224 285.854 81.9534C286.414 82.0189 286.828 82.2677 287.078 82.713C287.329 83.1582 287.447 83.6297 287.447 84.1273C287.447 84.6249 287.329 85.0702 287.078 85.45C286.828 85.8297 286.429 85.9869 285.854 85.9214C282.24 85.6726 278.832 85.5154 275.601 85.45C272.385 85.3845 269.287 85.3583 266.307 85.3583C263.327 85.3583 260.008 85.3845 256.113 85.45C252.219 85.5154 248.531 85.6726 245.064 85.9214C244.503 85.9869 244.076 85.8297 243.795 85.45C243.515 85.0702 243.368 84.638 243.368 84.1273C243.368 83.6166 243.5 83.1582 243.795 82.713C244.076 82.2808 244.503 82.0189 245.064 81.9534C247.749 81.7046 249.829 81.1807 251.275 80.395C252.72 79.6093 253.458 78.1163 253.458 75.9162C253.458 74.8424 253.281 73.6245 252.927 72.2363C252.573 70.8482 252.042 69.2505 251.334 67.4302L246.554 55.2642C246.2 54.3868 245.507 53.7582 244.489 53.3784C243.456 52.9986 242.305 52.8153 241.037 52.8153H216.71C215.22 52.8153 213.937 52.9593 212.83 53.2343C211.724 53.5225 211.001 54.0987 210.647 54.9761L205.13 67.7969C203.359 71.7518 202.474 74.7376 202.474 76.7544C202.474 78.5747 203.168 79.845 204.54 80.5783C205.926 81.2986 207.992 81.757 210.75 81.9403C211.311 82.0058 211.724 82.2546 211.975 82.6999C212.226 83.1451 212.344 83.6166 212.344 84.1142C212.344 84.6118 212.226 85.0571 211.975 85.4369C211.724 85.8167 211.326 85.9738 210.75 85.9083C206.428 85.5285 202.533 85.3452 199.067 85.3452C197.09 85.3452 195.29 85.4107 193.697 85.5285C192.104 85.6595 190.451 85.7774 188.755 85.9083C188.194 85.9738 187.781 85.8167 187.53 85.4369C187.28 85.0571 187.162 84.6249 187.162 84.1142C187.162 83.6035 187.28 83.1451 187.53 82.6999C187.781 82.2677 188.179 82.0058 188.755 81.9403C190.097 81.8093 191.233 81.4557 192.148 80.8533C193.062 80.2509 193.844 79.5438 194.479 78.7318C195.113 77.9199 195.644 77.0294 196.072 76.0865C196.5 75.1436 196.883 74.2662 197.237 73.4411C202.548 61.3144 207.741 49.3711 212.801 37.6111C217.861 25.8511 223.054 13.9077 228.364 1.78103L228.379 1.80722ZM229.338 11.616L214.261 46.5031C213.907 47.1972 214.025 47.8127 214.63 48.3365C215.235 48.8735 216.032 49.1354 217.02 49.1354H240.063C241.051 49.1354 241.907 48.9127 242.615 48.4806C243.323 48.0353 243.53 47.4722 243.249 46.7781L229.338 11.6029V11.616ZM302.834 12.5589C302.834 10.1099 302.391 8.18486 301.506 6.80981C300.621 5.42165 298.733 4.60971 295.826 4.36089C295.266 4.29542 294.838 4.0466 294.558 3.60134C294.277 3.15608 294.13 2.68463 294.13 2.187C294.13 1.68936 294.277 1.2441 294.558 0.864321C294.838 0.484544 295.266 0.327394 295.826 0.392873C299.367 0.641693 302.553 0.798843 305.386 0.864321C308.218 0.9298 311.051 0.955992 313.883 0.955992C316.716 0.955992 319.666 0.9298 322.543 0.864321C325.405 0.798843 328.65 0.641693 332.264 0.392873C332.825 0.327394 333.238 0.484544 333.489 0.864321C333.74 1.2441 333.858 1.67626 333.858 2.187C333.858 2.69773 333.74 3.15608 333.489 3.60134C333.238 4.0466 332.84 4.29542 332.264 4.36089C329.358 4.60971 327.455 5.43475 326.526 6.80981C325.611 8.19796 325.139 10.1099 325.139 12.5589V73.7554C325.139 78.7842 328.399 81.2986 334.905 81.2986C339.641 81.2986 343.786 81.076 347.326 80.6438C350.867 80.2117 354.23 79.2033 357.417 77.6318C360.603 76.1913 363.259 74.2269 365.383 71.7387C367.508 69.2505 368.953 66.1337 369.735 62.3621C369.809 61.9169 370.06 61.6287 370.473 61.4716C370.901 61.3144 371.387 61.2359 371.963 61.2359C372.538 61.2359 373.025 61.3275 373.453 61.524C373.88 61.7204 374.057 62.0609 373.984 62.5585C373.777 64.1955 373.6 65.9372 373.453 67.7969C373.305 69.6565 373.172 71.5161 373.025 73.4018C372.877 75.2876 372.759 77.108 372.656 78.8759C372.553 80.6307 372.464 82.2677 372.39 83.7737C372.243 85.2142 371.284 85.9476 369.529 85.9476C363.657 85.8821 358.538 85.8167 354.186 85.7643C349.834 85.6988 345.63 85.6595 341.603 85.6202C337.56 85.594 333.4 85.5547 329.122 85.5285C324.829 85.5024 319.755 85.45 313.883 85.3845C310.977 85.319 308.13 85.3321 305.327 85.4369C302.524 85.5285 299.367 85.6988 295.826 85.9607C295.266 86.0262 294.838 85.869 294.558 85.4893C294.277 85.1095 294.13 84.6773 294.13 84.1666C294.13 83.6559 294.277 83.1975 294.558 82.7522C294.838 82.3201 295.266 82.0582 295.826 81.9927C298.733 81.6784 300.621 80.8402 301.506 79.4914C302.391 78.1425 302.834 76.2436 302.834 73.7816V12.5589Z"
                    fill="url(#paint0_linear_315_2357)"/>
                <defs>
                    <linearGradient id="paint0_linear_315_2357" x1="0.0147522" y1="43.0065" x2="374.013" y2="43.0065"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FAD483"/>
                        <stop offset="0.23" stop-color="#F0CC80"/>
                        <stop offset="0.41" stop-color="#FDEBA7"/>
                        <stop offset="0.59" stop-color="#FEEBA6"/>
                        <stop offset="0.77" stop-color="#FCF8CB"/>
                        <stop offset="1" stop-color="#FDECAB"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <svg width={estateWidth} height={estateHeight} viewBox="0 0 540 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.68946 12.4905C8.68946 10.0344 8.24762 8.12998 7.36395 6.76404C6.48028 5.41123 4.5951 4.57065 1.69371 4.25543C1.13405 4.18976 0.706939 3.94022 0.427109 3.49366C0.147279 3.06024 0 2.58741 0 2.07518C0 1.62862 0.147279 1.22147 0.427109 0.84058C0.706939 0.459692 1.13405 0.302083 1.69371 0.367754C5.15476 0.617301 8.30654 0.788043 11.1343 0.893116C13.962 0.985054 16.7898 0.998188 19.6176 0.945652C25.2731 0.879982 30.3247 0.84058 34.7873 0.801178C39.2351 0.774909 43.6093 0.735507 47.8804 0.709239C52.1515 0.682971 56.5993 0.630435 61.1944 0.564764C65.7895 0.499094 71.0179 0.433424 76.8944 0.380888C78.6617 0.380888 79.619 1.07699 79.7516 2.45607C79.8252 3.96649 79.9136 5.60824 80.0167 7.36821C80.1198 9.12817 80.2523 10.9669 80.3849 12.8582C80.5322 14.7495 80.6647 16.6277 80.812 18.4796C80.9593 20.3447 81.136 22.0915 81.3422 23.7332C81.4158 24.2323 81.2391 24.587 80.812 24.7708C80.3849 24.9547 79.8989 25.0598 79.3245 25.0598C78.7501 25.0598 78.2788 24.981 77.8959 24.8234C77.5129 24.6658 77.2478 24.3637 77.1006 23.9303C76.3936 19.8324 74.9208 16.5358 72.6969 14.0534C70.473 11.558 67.7778 9.6404 64.6408 8.28759C61.489 6.93478 58.0132 6.02853 54.1987 5.59511C50.3841 5.16168 46.4518 4.93841 42.4311 4.93841C38.6902 4.93841 35.833 5.50317 33.8889 6.64583C31.9448 7.77536 30.9728 9.73234 30.9728 12.5036V38.3252C30.9728 39.7174 31.3262 40.6105 32.0332 41.0177C32.7401 41.4248 33.9036 41.635 35.5384 41.635H46.7758C49.5299 41.635 51.798 41.4511 53.5654 41.0702C55.3327 40.6893 56.7319 40.0983 57.7481 39.2708C58.779 38.4565 59.5302 37.3533 60.0309 35.961C60.5317 34.582 60.9146 32.9008 61.1944 30.9438C61.3417 30.0639 62.0781 29.6173 63.4183 29.6173C63.978 29.6173 64.4787 29.7618 64.9059 30.0376C65.333 30.3134 65.5097 30.6812 65.4361 31.1277C65.0826 33.3342 64.8764 35.4357 64.8028 37.4189C64.7291 39.4022 64.6997 41.4117 64.6997 43.4212C64.6997 45.4307 64.7291 47.4402 64.8028 49.4235C64.8764 51.4067 65.0826 53.5081 65.4361 55.7147C65.5097 56.2138 65.333 56.5946 64.9059 56.8442C64.4787 57.0937 63.9927 57.2251 63.4183 57.2251C62.0781 57.2251 61.327 56.7917 61.1944 55.8985C60.9146 53.9416 60.5169 52.2867 60.0309 50.9339C59.5302 49.5811 58.779 48.4909 57.7481 47.6766C56.7171 46.8623 55.3327 46.2581 53.5654 45.8773C51.798 45.4964 49.5299 45.3125 46.7758 45.3125H35.5384C33.9184 45.3125 32.7401 45.5226 32.0332 45.9298C31.3262 46.3369 30.9728 47.2432 30.9728 48.6223V73.8659C30.9728 76.6372 32.0037 78.5942 34.0509 79.7237C36.0981 80.8532 39.0289 81.4312 42.8582 81.4312C47.5858 81.4312 51.9895 81.2079 56.0544 80.7745C60.1193 80.341 63.7423 79.3297 66.9236 77.7536C70.1048 76.3089 72.7706 74.3388 74.9356 71.8433C77.0858 69.3478 78.5292 66.2219 79.2361 62.4393C79.3834 62.0059 79.6485 61.7038 80.0314 61.5462C80.4143 61.3886 80.9004 61.3098 81.46 61.3098C82.0197 61.3098 82.5204 61.4017 82.9475 61.5987C83.3746 61.7826 83.5514 62.1372 83.4777 62.6363C83.2716 64.2781 83.0948 66.0249 82.9475 67.8899C82.8003 69.755 82.6677 71.62 82.5204 73.5113C82.3731 75.4026 82.2553 77.2282 82.1522 79.0013C82.0491 80.7613 81.9608 82.4031 81.8871 83.9135C81.7398 85.3714 80.7973 86.0937 79.0299 86.0937C73.1535 86.0281 67.8956 85.9624 63.2269 85.9099C58.5581 85.8573 54.0072 85.7785 49.5447 85.726C45.0968 85.6603 40.5165 85.6209 35.8183 85.5815C31.1201 85.5552 25.7591 85.5027 19.7501 85.437C16.8487 85.3714 14.0062 85.4239 11.2079 85.5815C8.40963 85.7391 5.25786 85.9099 1.72316 86.1069C1.1635 86.1725 0.736395 86.0149 0.456565 85.6341C0.176735 85.2532 0.0294558 84.8197 0.0294558 84.3075C0.0294558 83.7953 0.176735 83.3356 0.456565 82.889C0.736395 82.4556 1.1635 82.1929 1.72316 82.1273C4.62456 81.812 6.50973 80.9715 7.39341 79.6187C8.27708 78.2658 8.71892 76.3614 8.71892 73.8922V12.4905H8.68946ZM92.8889 24.981C92.8889 21.067 93.8609 17.5865 95.805 14.5263C97.7491 11.466 100.562 8.85236 104.229 6.6721C107.911 4.49185 112.389 2.83696 117.691 1.70743C122.993 0.577898 128.972 0 135.615 0C140.71 0 145.335 0.48596 149.503 1.47101C153.671 2.45607 157.25 3.82201 160.21 5.58197C163.185 7.34194 165.453 9.46966 167.044 11.9651C168.634 14.4606 169.43 17.245 169.43 20.3315C169.43 27.332 165.615 30.8256 157.971 30.8256C157.058 30.8256 156.072 30.7337 155.055 30.5367C154.024 30.3528 153.097 30.0376 152.242 29.591C151.388 29.1576 150.711 28.5797 150.18 27.8836C149.65 27.1875 149.385 26.3338 149.385 25.3356C149.385 24.2061 149.532 23.1159 149.812 22.0783C150.092 21.0408 150.401 20.0163 150.711 19.005C151.035 17.9937 151.314 17.0217 151.565 16.0761C151.815 15.1304 151.933 14.2505 151.933 13.423C151.933 10.4547 150.46 8.09058 147.529 6.33062C144.599 4.57065 140.696 3.67754 135.806 3.67754C132.698 3.67754 129.782 4.01902 127.058 4.71513C124.333 5.41123 121.962 6.37002 119.959 7.60462C117.941 8.83922 116.35 10.2577 115.187 11.8601C114.023 13.4624 113.434 15.2224 113.434 17.1137C113.434 19.3859 114.244 21.3954 115.879 23.1685C117.499 24.9284 119.649 26.5702 122.3 28.0806C124.952 29.591 127.956 31.0095 131.314 32.336C134.672 33.6626 138.118 35.0285 141.653 36.447C145.188 37.8655 148.634 39.3759 151.992 40.9914C155.35 42.5937 158.354 44.4325 161.005 46.4814C163.656 48.5303 165.792 50.8419 167.427 53.4293C169.047 56.0167 169.872 58.9719 169.872 62.3211C169.872 66.1694 168.885 69.5974 166.897 72.6313C164.923 75.6522 162.095 78.2396 158.413 80.3804C154.731 82.5213 150.254 84.163 144.952 85.2926C139.65 86.4221 133.67 87 127.028 87C121.932 87 117.308 86.514 113.14 85.529C108.972 84.5571 105.393 83.178 102.433 81.418C99.4575 79.6581 97.1894 77.5303 95.5988 75.0349C94.0082 72.5394 93.2129 69.7812 93.2129 66.7604C93.2129 59.76 97.0716 56.2663 104.774 56.2663C105.687 56.2663 106.645 56.3582 107.632 56.5552C108.618 56.7391 109.546 57.0543 110.386 57.5009C111.24 57.9475 111.917 58.5122 112.448 59.2083C112.978 59.9044 113.243 60.7581 113.243 61.7563C113.243 62.8859 113.125 63.976 112.875 65.0136C112.624 66.0512 112.344 67.0756 112.02 68.0869C111.696 69.0983 111.402 70.0571 111.122 70.9764C110.842 71.8958 110.695 72.7889 110.695 73.6689C110.695 76.6372 112.006 78.9619 114.613 80.6694C117.234 82.3768 120.798 83.2174 125.32 83.2174C128.427 83.2174 131.432 82.8365 134.333 82.0879C137.235 81.3261 139.783 80.3016 141.962 79.0145C144.157 77.7273 145.895 76.2432 147.205 74.5752C148.516 72.9072 149.164 71.1603 149.164 69.3215C149.164 67.0494 148.354 65.0661 146.719 63.3587C145.085 61.6513 142.978 60.0752 140.357 58.6304C137.735 57.1857 134.731 55.8066 131.343 54.5195C127.956 53.2323 124.51 51.9058 121.004 50.553C117.499 49.2002 114.053 47.7554 110.665 46.2056C107.278 44.6558 104.274 42.8827 101.652 40.8601C99.0304 38.8374 96.9096 36.5389 95.2895 33.9515C93.6694 31.3641 92.8447 28.3696 92.8447 24.9678L92.8889 24.981ZM210.27 12.4905C210.27 10.2183 209.725 8.4846 208.621 7.2894C207.516 6.0942 205.601 5.49004 202.847 5.49004C200.093 5.49004 197.707 5.96286 195.483 6.90851C193.259 7.85417 191.153 9.24638 189.18 11.072C187.059 12.9633 185.41 15.1173 184.246 17.5471C183.083 19.9769 182.214 22.6037 181.654 25.4407C181.58 25.8216 181.33 26.0974 180.918 26.2944C180.49 26.4783 180.004 26.5833 179.43 26.5833C178.856 26.5833 178.37 26.4783 177.942 26.255C177.515 26.0317 177.339 25.7033 177.412 25.2568C177.56 23.615 177.707 21.7894 177.884 19.7668C178.06 17.7441 178.208 15.7215 178.311 13.6726C178.414 11.6236 178.517 9.6404 178.635 7.70969C178.738 5.79212 178.826 4.07156 178.9 2.56114C179.047 1.11639 179.99 0.380888 181.757 0.380888C188.473 0.512228 195.086 0.630435 201.581 0.761775C208.09 0.893116 214.659 0.945652 221.301 0.945652C227.944 0.945652 234.645 0.879982 241.184 0.761775C247.723 0.630435 254.351 0.512228 261.067 0.380888C262.834 0.380888 263.791 1.10326 263.924 2.56114C263.998 4.07156 264.086 5.79212 264.189 7.70969C264.292 9.62726 264.425 11.6236 264.557 13.6726C264.705 15.7215 264.837 17.7572 264.984 19.7668C265.117 21.7894 265.308 23.615 265.515 25.2568C265.588 25.7033 265.397 26.0317 264.925 26.255C264.469 26.4783 263.953 26.5833 263.394 26.5833C262.834 26.5833 262.348 26.4914 261.965 26.2944C261.582 26.1105 261.347 25.8216 261.273 25.4407C260.772 23.0503 259.962 20.6467 258.828 18.2563C257.694 15.8659 256.236 13.712 254.424 11.8207C252.628 9.92935 250.522 8.4058 248.121 7.23687C245.72 6.06793 242.966 5.49004 239.844 5.49004C237.149 5.49004 235.263 6.0942 234.174 7.2894C233.069 8.4846 232.524 10.2183 232.524 12.4905V73.8659C232.524 76.322 232.981 78.2264 233.909 79.5924C234.822 80.9452 236.736 81.7858 239.638 82.101C240.197 82.1667 240.61 82.4162 240.86 82.8628C241.11 83.3093 241.228 83.7822 241.228 84.2812C241.228 84.7803 241.11 85.2269 240.86 85.6078C240.61 85.9887 240.212 86.1463 239.638 86.0806C236.029 85.8311 232.804 85.6735 229.932 85.6078C227.075 85.5421 224.188 85.5158 221.287 85.5158C218.385 85.5158 215.543 85.5421 212.745 85.6078C209.946 85.6735 206.75 85.8311 203.142 86.0806C202.641 86.1463 202.258 85.9887 201.978 85.6078C201.699 85.2269 201.551 84.7935 201.551 84.2812C201.551 83.769 201.699 83.3093 201.978 82.8628C202.258 82.4293 202.656 82.1667 203.142 82.101C206.043 81.7858 207.943 80.9452 208.871 79.5924C209.799 78.2396 210.255 76.3351 210.255 73.8659V12.4905H210.27ZM304.647 1.72056C305 0.709239 305.633 0.275815 306.561 0.394022C307.695 0.525362 308.844 0.617301 310.008 0.682971C311.171 0.748641 312.32 0.774909 313.454 0.774909C315.148 0.774909 316.841 0.722373 318.55 0.630435C320.243 0.538496 321.908 0.459692 323.528 0.394022C324.662 0.394022 325.369 0.801178 325.649 1.62862L353.543 73.5901C353.97 74.7853 354.397 75.8754 354.81 76.8474C355.222 77.8193 355.723 78.6861 356.297 79.4479C356.857 80.2097 357.608 80.8007 358.521 81.2473C359.434 81.6938 360.613 81.9697 362.027 82.101C362.586 82.1667 362.999 82.4162 363.249 82.8628C363.499 83.3093 363.617 83.7822 363.617 84.2812C363.617 84.7803 363.499 85.2269 363.249 85.6078C362.999 85.9887 362.601 86.1463 362.027 86.0806C358.418 85.8311 355.016 85.6735 351.791 85.6078C348.58 85.5421 345.487 85.5158 342.512 85.5158C339.537 85.5158 336.223 85.5421 332.335 85.6078C328.447 85.6735 324.765 85.8311 321.304 86.0806C320.744 86.1463 320.317 85.9887 320.037 85.6078C319.757 85.2269 319.61 84.7935 319.61 84.2812C319.61 83.769 319.743 83.3093 320.037 82.8628C320.317 82.4293 320.744 82.1667 321.304 82.101C323.984 81.8514 326.061 81.3261 327.504 80.538C328.948 79.75 329.684 78.2527 329.684 76.0462C329.684 74.9692 329.507 73.7477 329.154 72.3555C328.8 70.9764 328.27 69.3609 327.563 67.5353L322.791 55.3338C322.438 54.4538 321.746 53.8234 320.729 53.4425C319.699 53.0616 318.55 52.8777 317.283 52.8777H292.997C291.509 52.8777 290.228 53.0222 289.123 53.298C288.019 53.5869 287.297 54.1648 286.944 55.0448L281.435 67.9031C279.668 71.8696 278.784 74.8641 278.784 76.8868C278.784 78.7124 279.477 79.9995 280.846 80.7219C282.231 81.4443 284.293 81.904 287.047 82.0879C287.606 82.1535 288.019 82.4031 288.269 82.8496C288.52 83.2962 288.637 83.769 288.637 84.2681C288.637 84.7672 288.52 85.2138 288.269 85.5947C288.019 85.9755 287.621 86.1331 287.047 86.0675C282.731 85.6866 278.843 85.5027 275.382 85.5027C273.409 85.5027 271.612 85.5684 270.021 85.6866C268.431 85.8179 266.781 85.9361 265.087 86.0675C264.528 86.1331 264.115 85.9755 263.865 85.5947C263.615 85.2138 263.497 84.7803 263.497 84.2681C263.497 83.7559 263.615 83.2962 263.865 82.8496C264.115 82.4162 264.513 82.1535 265.087 82.0879C266.428 81.9697 267.562 81.6019 268.475 80.9977C269.388 80.3936 270.169 79.6843 270.802 78.87C271.435 78.0557 271.965 77.1626 272.393 76.2169C272.82 75.2713 273.203 74.3913 273.556 73.5639C278.858 61.4017 284.042 49.4235 289.094 37.6291C294.146 25.8478 299.33 13.8564 304.632 1.69429L304.647 1.72056ZM305.604 11.5448L290.552 46.534C290.199 47.2301 290.316 47.8474 290.92 48.3727C291.524 48.9112 292.319 49.1739 293.306 49.1739H316.311C317.298 49.1739 318.152 48.9506 318.859 48.5172C319.566 48.0838 319.772 47.5059 319.492 46.8098L305.604 11.5317V11.5448ZM394.575 12.4905C394.575 10.2183 394.03 8.4846 392.926 7.2894C391.821 6.0942 389.906 5.49004 387.152 5.49004C384.398 5.49004 382.012 5.96286 379.788 6.90851C377.564 7.85417 375.458 9.24638 373.485 11.072C371.364 12.9633 369.714 15.1173 368.551 17.5471C367.387 19.9769 366.519 22.6037 365.959 25.4407C365.885 25.8216 365.635 26.0974 365.222 26.2944C364.795 26.4783 364.309 26.5833 363.735 26.5833C363.161 26.5833 362.675 26.4783 362.247 26.255C361.82 26.0317 361.644 25.7033 361.717 25.2568C361.865 23.615 362.012 21.7894 362.189 19.7668C362.365 17.7441 362.513 15.7215 362.616 13.6726C362.719 11.6236 362.822 9.6404 362.94 7.70969C363.043 5.79212 363.131 4.07156 363.205 2.56114C363.352 1.11639 364.295 0.380888 366.062 0.380888C372.778 0.512228 379.391 0.630435 385.886 0.761775C392.395 0.893116 398.964 0.945652 405.606 0.945652C412.249 0.945652 418.95 0.879982 425.489 0.761775C432.028 0.630435 438.656 0.512228 445.372 0.380888C447.139 0.380888 448.096 1.10326 448.229 2.56114C448.303 4.07156 448.391 5.79212 448.494 7.70969C448.597 9.62726 448.73 11.6236 448.862 13.6726C449.009 15.7215 449.142 17.7572 449.289 19.7668C449.422 21.7894 449.613 23.615 449.82 25.2568C449.893 25.7033 449.702 26.0317 449.23 26.255C448.774 26.4783 448.258 26.5833 447.699 26.5833C447.139 26.5833 446.653 26.4914 446.27 26.2944C445.887 26.1105 445.652 25.8216 445.578 25.4407C445.077 23.0503 444.267 20.6467 443.133 18.2563C441.999 15.8659 440.541 13.712 438.729 11.8207C436.933 9.92935 434.827 8.4058 432.426 7.23687C430.025 6.06793 427.271 5.49004 424.149 5.49004C421.454 5.49004 419.568 6.0942 418.479 7.2894C417.374 8.4846 416.829 10.2183 416.829 12.4905V73.8659C416.829 76.322 417.286 78.2264 418.213 79.5924C419.127 80.9452 421.041 81.7858 423.943 82.101C424.502 82.1667 424.915 82.4162 425.165 82.8628C425.415 83.3093 425.533 83.7822 425.533 84.2812C425.533 84.7803 425.415 85.2269 425.165 85.6078C424.915 85.9887 424.517 86.1463 423.943 86.0806C420.334 85.8311 417.109 85.6735 414.237 85.6078C411.38 85.5421 408.493 85.5158 405.592 85.5158C402.69 85.5158 399.848 85.5421 397.049 85.6078C394.251 85.6735 391.055 85.8311 387.447 86.0806C386.946 86.1463 386.563 85.9887 386.283 85.6078C386.004 85.2269 385.856 84.7935 385.856 84.2812C385.856 83.769 386.004 83.3093 386.283 82.8628C386.563 82.4293 386.961 82.1667 387.447 82.101C390.348 81.7858 392.248 80.9452 393.176 79.5924C394.104 78.2396 394.56 76.3351 394.56 73.8659V12.4905H394.575ZM465.195 12.4905C465.195 10.0344 464.754 8.12998 463.87 6.76404C462.986 5.41123 461.101 4.57065 458.2 4.25543C457.64 4.18976 457.213 3.94022 456.933 3.49366C456.653 3.06024 456.506 2.58741 456.506 2.07518C456.506 1.62862 456.653 1.22147 456.933 0.84058C457.213 0.459692 457.64 0.302083 458.2 0.367754C461.661 0.617301 464.813 0.788043 467.64 0.893116C470.468 0.985054 473.296 0.998188 476.124 0.945652C481.779 0.879982 486.831 0.84058 491.293 0.801178C495.741 0.774909 500.115 0.735507 504.386 0.709239C508.657 0.682971 513.105 0.630435 517.7 0.564764C522.296 0.499094 527.524 0.433424 533.4 0.380888C535.168 0.380888 536.125 1.07699 536.258 2.45607C536.331 3.96649 536.42 5.60824 536.523 7.36821C536.626 9.12817 536.758 10.9669 536.891 12.8582C537.038 14.7495 537.171 16.6277 537.318 18.4796C537.465 20.3447 537.642 22.0915 537.848 23.7332C537.922 24.2323 537.745 24.587 537.318 24.7708C536.891 24.9547 536.405 25.0598 535.831 25.0598C535.256 25.0598 534.785 24.981 534.402 24.8234C534.019 24.6658 533.754 24.3637 533.607 23.9303C532.9 19.8324 531.427 16.5358 529.203 14.0534C526.979 11.558 524.284 9.6404 521.147 8.28759C517.995 6.93478 514.519 6.02853 510.705 5.59511C506.89 5.16168 502.958 4.93841 498.937 4.93841C495.196 4.93841 492.339 5.50317 490.395 6.64583C488.451 7.77536 487.479 9.73234 487.479 12.5036V38.3252C487.479 39.7174 487.832 40.6105 488.539 41.0177C489.246 41.4248 490.41 41.635 492.044 41.635H503.282C506.036 41.635 508.304 41.4511 510.071 41.0702C511.839 40.6893 513.238 40.0983 514.254 39.2708C515.285 38.4565 516.036 37.3533 516.537 35.961C517.038 34.582 517.421 32.9008 517.7 30.9438C517.848 30.0639 518.584 29.6173 519.924 29.6173C520.484 29.6173 520.985 29.7618 521.412 30.0376C521.839 30.3134 522.016 30.6812 521.942 31.1277C521.589 33.3342 521.382 35.4357 521.309 37.4189C521.235 39.4022 521.206 41.4117 521.206 43.4212C521.206 45.4307 521.235 47.4402 521.309 49.4235C521.382 51.4067 521.589 53.5081 521.942 55.7147C522.016 56.2138 521.839 56.5946 521.412 56.8442C520.985 57.0937 520.499 57.2251 519.924 57.2251C518.584 57.2251 517.833 56.7917 517.7 55.8985C517.421 53.9416 517.023 52.2867 516.537 50.9339C516.036 49.5811 515.285 48.4909 514.254 47.6766C513.223 46.8623 511.839 46.2581 510.071 45.8773C508.304 45.4964 506.036 45.3125 503.282 45.3125H492.044C490.424 45.3125 489.246 45.5226 488.539 45.9298C487.832 46.3369 487.479 47.2432 487.479 48.6223V73.8659C487.479 76.6372 488.51 78.5942 490.557 79.7237C492.604 80.8532 495.535 81.4312 499.364 81.4312C504.092 81.4312 508.495 81.2079 512.56 80.7745C516.625 80.341 520.248 79.3297 523.43 77.7536C526.611 76.3089 529.277 74.3388 531.442 71.8433C533.592 69.3478 535.035 66.2219 535.742 62.4393C535.889 62.0059 536.154 61.7038 536.537 61.5462C536.92 61.3886 537.406 61.3098 537.966 61.3098C538.526 61.3098 539.026 61.4017 539.453 61.5987C539.881 61.7826 540.057 62.1372 539.984 62.6363C539.778 64.2781 539.601 66.0249 539.453 67.8899C539.306 69.755 539.174 71.62 539.026 73.5113C538.879 75.4026 538.761 77.2282 538.658 79.0013C538.555 80.7613 538.467 82.4031 538.393 83.9135C538.246 85.3714 537.303 86.0937 535.536 86.0937C529.659 86.0281 524.402 85.9624 519.733 85.9099C515.064 85.8573 510.513 85.7785 506.051 85.726C501.603 85.6603 497.022 85.6209 492.324 85.5815C487.626 85.5552 482.265 85.5027 476.256 85.437C473.355 85.3714 470.512 85.4239 467.714 85.5815C464.916 85.7391 461.764 85.9099 458.229 86.1069C457.669 86.1725 457.242 86.0149 456.963 85.6341C456.683 85.2532 456.535 84.8197 456.535 84.3075C456.535 83.7953 456.683 83.3356 456.963 82.889C457.242 82.4556 457.669 82.1929 458.229 82.1273C461.131 81.812 463.016 80.9715 463.899 79.6187C464.783 78.2658 465.225 76.3614 465.225 73.8922V12.4905H465.195Z"
                fill="url(#paint0_linear_315_2358)"/>
            <defs>
                <linearGradient id="paint0_linear_315_2358" x1="0" y1="43.5131" x2="539.969" y2="43.5131"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAD483"/>
                    <stop offset="0.23" stop-color="#F0CC80"/>
                    <stop offset="0.41" stop-color="#FDEBA7"/>
                    <stop offset="0.59" stop-color="#FEEBA6"/>
                    <stop offset="0.77" stop-color="#FCF8CB"/>
                    <stop offset="1" stop-color="#FDECAB"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
}

Logo.propTypes = {
    mainGap: PropTypes.number,
    gap: PropTypes.number,
    logoWidth: PropTypes.number,
    logoHeight: PropTypes.number,
    realWidth: PropTypes.number,
    realHeight: PropTypes.number,
    estateWidth: PropTypes.number,
    estateHeight: PropTypes.number,
}

export default Logo;