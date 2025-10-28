// Import all menu images from assets folder
import placeholder from "@/assets/images/placeholder.png";
import glidat_shfaram_small from "@/assets/images/glidat_shfaram_small.jpg";
import glidat_shfaram_medium from "@/assets/images/glidat_shfaram_medium.jpg";
import glidat_shfaram_large from "@/assets/images/glidat_shfaram_large.jpg";
import glidat_shfaram_cup_deluxe from "@/assets/images/glidat_shfaram_cup_deluxe.jpg";
import glidat_shfaram_cup_small_TA from "@/assets/images/glidat_shfaram_cup_small_TA.png";
import glidat_shfaram_cup_small from "@/assets/images/glidat_shfaram_cup_small.png";
import glidat_shfaram_cup_big_TA from "@/assets/images/glidat_shfaram_cup_big_TA.png";
import italian_icecream_small from "@/assets/images/italian_icecream_small.jpg";
import italian_icecream_large from "@/assets/images/italian_icecream_large.jpg";
import italian_icecream from "@/assets/images/italian_icecream.jpg";
import american_icecream_medium from "@/assets/images/american_icecream_medium.jpg";
import american_icecream_large from "@/assets/images/american_icecream_large.jpg";
import burma_icecream from "@/assets/images/burma_icecream.jpg";
import sahlab_lotus_icecream from "@/assets/images/sahlab_lotus_icecream.png";
import icecream_knafeh_hot from "@/assets/images/icecream_knafeh_hot.jpg";
import icecream_kataif_hot from "@/assets/images/icecream_kataif_hot.jpg";
import sesame_icecream from "@/assets/images/sesame_icecream.jpg";
import tiramisu_icecream from "@/assets/images/tiramisu_icecream.jpg";
import layali_beirut_icecream from "@/assets/images/layali_beirut_icecream.jpg";
import icecream_with_espresso from "@/assets/images/icecream_with_espresso.jpg";
import dubai_chocolate_icecream from "@/assets/images/dubai_chocolate_icecream.png";
import belgian_waffle from "@/assets/images/belgian_waffle.jpg";
import belgian_waffle_icecream_whippedcream from "@/assets/images/belgian_waffle_icecream_whippedcream.jpg";
import belgian_waffle_deluxe from "@/assets/images/belgian_waffle_deluxe.jpg";
import french_crepe from "@/assets/images/french_crepe.jpg";
import french_crepe_icecream_whippedcream from "@/assets/images/french_crepe_icecream_whippedcream.jpg";
import croissant_with_icecream from "@/assets/images/croissant_with_icecream.jpg";
import pancake_balls from "@/assets/images/pancake_balls.jpg";
import cupcake_with_icecream from "@/assets/images/cupcake_with_icecream.png";
import souffle_with_icecream from "@/assets/images/souffle_with_icecream.jpg";
import cheesecake_strawberry from "@/assets/images/cheesecake_strawberry.jpg";
import cheesecake_forestberries from "@/assets/images/cheesecake_forestberries.jpg";
import cheesecake_orange from "@/assets/images/cheesecake_orange.jpg";
import darkchoco_icecream_cake from "@/assets/images/darkchoco_icecream_cake.jpg";
import nuts_pie from "@/assets/images/nuts_pie.jpg";
import yogurt_small_fruitmix from "@/assets/images/yogurt_small_fruitmix.jpg";
import yogurt_large_fruitmix from "@/assets/images/yogurt_large_fruitmix.jpg";
import milkshake from "@/assets/images/milkshake.jpg";
import orange_juice from "@/assets/images/orange_juice.jpg";
import carrot_juice from "@/assets/images/carrot_juice.jpg";
import apple_juice from "@/assets/images/apple_juice.jpg";
import lemon_mint_juice from "@/assets/images/lemon_mint_juice.jpg";
import noria_dessert from "@/assets/images/noria_dessert.jpg";
import cappuccino from "@/assets/images/cappuccino.jpg";
import espresso_short from "@/assets/images/espresso_short.jpg";
import nescafe from "@/assets/images/nescafe.jpg";
import hot_chocolate_milk from "@/assets/images/hot_chocolate_milk.jpg";
import hot_chocolate from "@/assets/images/hot_chocolate.jpg";
import tea from "@/assets/images/tea.jpg";
import sahlab_hot from "@/assets/images/sahlab_hot.jpg";
import sahlab_kinder_lotus from "@/assets/images/sahlab_kinder_lotus.jpg";

const images: Record<string, string> = {
  'glidat_shfaram_small.jpg': glidat_shfaram_small,
  'glidat_shfaram_medium.jpg': glidat_shfaram_medium,
  'glidat_shfaram_large.jpg': glidat_shfaram_large,
  'glidat_shfaram_cup_deluxe.jpg': glidat_shfaram_cup_deluxe,
  'glidat_shfaram_cup_small_TA.png': glidat_shfaram_cup_small_TA,
  'glidat_shfaram_cup_small.png': glidat_shfaram_cup_small,
  'glidat_shfaram_cup_big_TA.png': glidat_shfaram_cup_big_TA,
  'italian_icecream_small.jpg': italian_icecream_small,
  'italian_icecream_large.jpg': italian_icecream_large,
  'italian_icecream.jpg': italian_icecream,
  'american_icecream_medium.jpg': american_icecream_medium,
  'american_icecream_large.jpg': american_icecream_large,
  'burma_icecream.jpg': burma_icecream,
  'sahlab_lotus_icecream.png': sahlab_lotus_icecream,
  'icecream_knafeh_hot.jpg': icecream_knafeh_hot,
  'icecream_kataif_hot.jpg': icecream_kataif_hot,
  'sesame_icecream.jpg': sesame_icecream,
  'tiramisu_icecream.jpg': tiramisu_icecream,
  'layali_beirut_icecream.jpg': layali_beirut_icecream,
  'icecream_with_espresso.jpg': icecream_with_espresso,
  'dubai_chocolate_icecream.png': dubai_chocolate_icecream,
  'belgian_waffle.jpg': belgian_waffle,
  'belgian_waffle_icecream_whippedcream.jpg': belgian_waffle_icecream_whippedcream,
  'belgian_waffle_deluxe.jpg': belgian_waffle_deluxe,
  'french_crepe.jpg': french_crepe,
  'french_crepe_icecream_whippedcream.jpg': french_crepe_icecream_whippedcream,
  'croissant_with_icecream.jpg': croissant_with_icecream,
  'pancake_balls.jpg': pancake_balls,
  'cupcake_with_icecream.png': cupcake_with_icecream,
  'souffle_with_icecream.jpg': souffle_with_icecream,
  'cheesecake_strawberry.jpg': cheesecake_strawberry,
  'cheesecake_forestberries.jpg': cheesecake_forestberries,
  'cheesecake_orange.jpg': cheesecake_orange,
  'darkchoco_icecream_cake.jpg': darkchoco_icecream_cake,
  'nuts_pie.jpg': nuts_pie,
  'yogurt_small_fruitmix.jpg': yogurt_small_fruitmix,
  'yogurt_large_fruitmix.jpg': yogurt_large_fruitmix,
  'milkshake.jpg': milkshake,
  'orange_juice.jpg': orange_juice,
  'carrot_juice.jpg': carrot_juice,
  'apple_juice.jpg': apple_juice,
  'lemon_mint_juice.jpg': lemon_mint_juice,
  'noria_dessert.jpg': noria_dessert,
  'cappuccino.jpg': cappuccino,
  'espresso_short.jpg': espresso_short,
  'nescafe.jpg': nescafe,
  'hot_chocolate_milk.jpg': hot_chocolate_milk,
  'hot_chocolate.jpg': hot_chocolate,
  'tea.jpg': tea,
  'sahlab_hot.jpg': sahlab_hot,
  'sahlab_kinder_lotus.jpg': sahlab_kinder_lotus,
};

export function getMenuImage(filename: string): string {
  return images[filename] || placeholder;
}
