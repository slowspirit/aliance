import $ from "jquery";

export default function () {
    (function quantityProducts() {
        let $quantityArrowMinus = $(".quantity-arrow-minus");
        let $quantityArrowPlus = $(".quantity-arrow-plus");
        let $quantityNum = $(".quantity-num");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();
};

