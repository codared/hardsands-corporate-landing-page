import { useEffect, useState } from "react";
// import { activateOptimizelyPage } from "../../../utils/optimizely";
import track from "../analytics";
// import { isAddressPoBox, isExpressShipping, shouldDisableExpressShipping } from "../functions";
// import { ExpressShippingDisableOptions, ShippingRate } from "../types";

// export function useExpressShippingDisableOption(
//   rates: ShippingRate[],
//   shipTo: string,
//   expressShippingDisableOption: ExpressShippingDisableOptions,
//   setIsShippingMethodAvailable: (val: boolean) => void,
//   setShowErrorModal: (val: boolean) => void,
//   updateSelectedRate: (rate: number) => void,
//   setIsLoading: (val: boolean) => void,
// ) {

//   const [selectedShipping, setSelectedShipping] = useState(0)

//   const handleSetSelectedShipping = (val: string) => {
//     const parsedValue = parseInt(val)
//     setSelectedShipping(parsedValue);
//     updateSelectedRate(parsedValue)
//     setIsShippingMethodAvailable(true)
//   }
//   const selected = rates.find((rate) => rate.selected === true)
//   const expressShippingAvailable = rates.find(rate => isExpressShipping(rate))


//   useEffect(() => {
//     if ((isAddressPoBox(shipTo) && expressShippingAvailable)) {
//       track.trackShippingIsPoBox()

//         ; (async () => {
//           await activateOptimizelyPage('disable_express_shipping')
//           if (expressShippingDisableOption) {
//             const newRate = rates.find(rate => !shouldDisableExpressShipping(shipTo, rate))
//             if (newRate) {
//               handleSetSelectedShipping(String(newRate.id))
//             } else {
//               setIsShippingMethodAvailable(false)
//               setShowErrorModal(true)
//               setIsLoading(false)
//             }
//             if (expressShippingDisableOption === 'disable') {
//               track.trackExpressShippingDisabled()
//             }
//           } else {
//             handleSetSelectedShipping(String(selected?.id))
//           }
//         })()
//     } else {
//       handleSetSelectedShipping(String(selected?.id))
//     }

//   }, [])

//   return {
//     selectedShipping,
//     handleSetSelectedShipping
//   }
// }