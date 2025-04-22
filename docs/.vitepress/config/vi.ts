import { defineConfig } from 'vitepress'

export const viSearch = {
  vi: {
    placeholder: 'Tìm kiếm tài liệu',
    translations: {
      button: {
        buttonText: 'Tìm kiếm tài liệu',
        buttonAriaLabel: 'Tìm kiếm tài liệu'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Xóa truy vấn',
          resetButtonAriaLabel: 'Xóa truy vấn',
          cancelButtonText: 'Hủy bỏ',
          cancelButtonAriaLabel: 'Hủy bỏ'
        },
        startScreen: {
          recentSearchesTitle: 'Lịch sử tìm kiếm',
          noRecentSearchesText: 'Không có lịch sử tìm kiếm',
          saveRecentSearchButtonTitle: 'Lưu vào lịch sử tìm kiếm',
          removeRecentSearchButtonTitle: 'Xóa khỏi lịch sử tìm kiếm',
          favoriteSearchesTitle: 'Yêu thích'
        },
        errorScreen: {
          titleText: 'Không thể lấy kết quả',
          helpText: 'Bạn có thể cần kiểm tra kết nối mạng'
        },
        footer: {
          selectText: 'Chọn',
          navigateText: 'Điều hướng',
          closeText: 'Đóng',
          searchByText: 'Tìm kiếm bởi'
        },
        noResultsScreen: {
          noResultsText: 'Không tìm thấy kết quả',
          suggestedQueryText: 'Bạn có thể thử tìm kiếm',
          reportMissingResultsText: 'Bạn cho rằng truy vấn này nên có kết quả?',
          reportMissingResultsLinkText: 'Báo cáo'
        }
      }
    }
  }
}

export const vi = defineConfig({
  themeConfig: {
    outline: {
      level: [2, 3],
      label: "Điều hướng trang"
    },
    footer: {
      copyright: `Phát hành theo giấy phép <a href="https://github.com/HIllya51/LunaTranslator/blob/main/LICENSE">GPLv3</a>`
    },
    editLink: {
      pattern: 'https://github.com/HIllya51/LunaTranslator/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub'
    },
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },
    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: "Trang chủ", link: "https://lunatranslator.org/" },
      { text: "Discord", link: "https://discord.com/invite/ErtDwVeAbB" },
      { text: "Tài trợ", link: "/vi/support" },
    ],
    sidebar: [
      {
        text: 'Cơ bản',
        items: [
          { text: 'Tải xuống và Khởi chạy', link: '/vi/README' },
          { text: 'Sử dụng Cơ bản', link: '/vi/basicuse' },
          { text: 'Cập nhật Phần mềm', link: '/vi/update' },
          { text: 'Tài trợ', link: '/vi/support' }
        ]
      },
      {
        text: 'Chi tiết',
        items: [
          { 
            text: 'Cài đặt Liên quan đến HOOK',
            collapsed: false,
            items: [
              { text: 'Cài đặt HOOK', link: '/vi/hooksettings' },
              { text: 'Dịch Nhúng', link: '/vi/embedtranslate' },
              { text: 'Hỗ trợ Game Giả lập', link: '/vi/emugames' },
            ]
          },
          {
            text: 'Cài đặt Liên quan đến OCR',
            collapsed: false,
            items: [
              { text: 'Cấu hình OCR', link: '/vi/ocrparam' },
              { text: 'Sử dụng OCR Hiệu quả', link: '/vi/gooduseocr' },
            ]
          },
          {
            text: 'Cài đặt giao diện dịch thuật',
            collapsed: false,
            items: [
              { text: 'Cài đặt Giao diện', link: '/vi/traninterface1' },
              { text: 'Hiệu ứng Văn bản', link: '/vi/traninterface2' },
              { text: 'Lịch sử Dịch thuật', link: '/vi/traninterface3' },
            ]
          },
          {
            text: 'Xử lý Văn bản & Tối ưu Dịch thuật',
            collapsed: false,
            items: [
              { text: 'Xử lý Văn bản', link: '/vi/textprocess' },
            ]
          },
          {
            text: 'Phân đoạn & Từ điển',
            collapsed: false,
            items: [
              { text: 'Từ điển', link: '/vi/dict' },
            ]
          },
          { text: 'Tổng hợp Giọng nói', link: '/vi/speechsynthesis' },
          { text: 'Nút Công cụ', link: '/vi/alltoolbuttons' },
          { text: 'Phím tắt', link: '/vi/fastkeys' },
          {
            text: 'Dịch vụ Mạng',
            collapsed: false,
            items: [
              { text: 'Dịch vụ API', link: '/vi/apiservice' },
              { text: 'API OCR', link: '/vi/useapis/ocrapi' },
              { text: 'API Dịch thuật', link: '/vi/useapis/tsapi' },
              { text: 'Model Nội địa Trung Quốc', link: '/vi/guochandamoxing' },
            ]
          }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'FAQ - Game', link: '/vi/qa1' },
          { text: 'FAQ - HOOK/OCR', link: '/vi/qa2' },
        ]
      }
    ]
  }
})
