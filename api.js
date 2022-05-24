const PREFIX = "/api/v2";

const pages = "pages";
const settings = "settings";
const contacts = "contacts";
const design_categories = "design-categories";
const construction_categories = "construction-categories";

// Authorization
// Authorization: "Api-Key emSrWReh.sdhbfPz0W1eNksmfw6sOddzclP183ZCv"
export const API_KEY = "Api-Key emSrWReh.sdhbfPz0W1eNksmfw6sOddzclP183ZCv";

const generatePathname = (data) => {
  const arr = [PREFIX, ...data];
  return `${arr.join("/")}`;
};

// /api/v2/settings/ Đây là endpoint trả về settings chung cho frontend.
// /api/v2/contacts/ Đây là endpoint submit contact.
// /api/v2/construction-categories/ Đây là endpoint trả về danh mục công trình.
// /api/v2/construction-categories/{id}/ Đây là endpoint trả về danh mục công trình.
// /api/v2/design-categories/ Đây là endpoint trả về danh mục thiết kế.
// /api/v2/design-categories/{id}/ Đây là endpoint trả về danh mục thiết kế.
// /api/v2/pages/ Đây là endpoint trả về nội dung các của các trang cho frontend.
// /api/v2/pages/{id}/ Đây là endpoint trả về nội dung của một trang cho frontend.

// ?type={str}

export const types = {
  homePage: "home.HomePage",
  constructionListingPage: "construction.ConstructionListingPage",
  constructionDetailPage: "construction.ConstructionDetailPage",
  designListingPage: "design.DesignListingPage",
  designDetailPage: "design.DesignDetailPage",
  contactPage: "contact.ContactPage",
  newsListingPage: "news.NewsListingPage",
  newsDetailPage: "news.NewsDetailPage",
  operationPolicy: "policy.OperationPolicyPage",
  paymentPolicy: "policy.PaymentPolicyPage",
  servicePage: "service.ServicePage",
};

// ?fields={str} ( Cho page ) Nhận vào tên các trường dữ liệu ngăn cách với nhau bằng dấu phẩy - Sẽ trả về những trường dữ liệu ứng với những trường đã khai báo vd: ?fields=title,banner.
// ?Để lấy hết thì sử dụng ?fields=* ( lưu ý có thể sẽ không lấy hết được các trường dữ liệu mong muốn nếu không khai báo tham số type ở trên ).
// ?child_of={int} ( Cho page ) Nhận vào id của một trang - Sẽ trả về các trang con của trang tương ứng.
// ?locale={str} ( Cho tất cả ) Nhận vào mã ngôn ngữ - Sẽ trả về các trang có ngôn ngữ tương ứng, hiện tại có vi, en.
// ?{field name}={any} ( Cho page ) Nhận vào giá trị muốn filter - Sẽ trả về các trang có trường dữ liệu trùng với giá trị tương ứng.

export const SETTINGS = generatePathname([settings]);
export const PAGES = generatePathname([pages]);
export const DESIGN_CATEGORIES = generatePathname([design_categories]);
export const CONTACTS = generatePathname([contacts]);
