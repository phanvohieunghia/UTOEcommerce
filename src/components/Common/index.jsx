export function ChangeToSlug(value) {
  var slug;
  //Đổi chữ hoa thành chữ thường
  slug = value.toLowerCase();
  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    '',
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, '-');
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  //In slug ra textbox có id “slug”
  return slug;
}
export const FormatPrice = ({ price = 0 }) => {
  const millionPrice = Math.floor(price / 1000000);
  const thousandPrice = Math.floor((price - millionPrice * 1000000) / 1000);
  const unitPrice = price % 1000;
  const group = (number, isPreGroup = false, isUnit = false) => {
    return isPreGroup
      ? number > 99
        ? number + (!isUnit ? '.' : '')
        : number > 9
        ? '0' + number + (!isUnit ? '.' : '')
        : number > 0
        ? '00' + number + (!isUnit ? '.' : '')
        : '000' + (!isUnit ? '.' : '')
      : number
      ? number + (!isUnit ? '.' : '')
      : '';
  };
  return (
    group(millionPrice) +
    group(thousandPrice, price > 1000000) +
    group(unitPrice, price > 1000, true)
  );
};
