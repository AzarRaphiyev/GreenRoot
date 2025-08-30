import React from 'react'

function Bloglar() {
  const BlogCard = ({ title, date, content, author, thumbnail }) => (
    <div className="my-3 w-full sm:w-[350px] lg:w-[392px] h-auto lg:h-[520px] rounded-[8px] bg-white shadow-[0px_7px_33.9px_-1px_#00000033]">
      <div>
        <div className="flex flex-col gap-2 px-[20px] sm:px-[24px] pt-[10px]">
          <div className="flex items-center justify-between">
            <h4 className="poppins-regular text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] tracking-[0%] text-[#000000DE]">
              {title}
            </h4>
            <p className="poppins-regular text-[10px] leading-[16px] tracking-[0%] text-[#00000061]">
              {date}
            </p>
          </div>
          <div className="flex gap-1">
            <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
            <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
            <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
            <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
            <img className="w-[14px] h-[14px] opacity-60" src="/assets/img/yarpaq.png" alt="" />
          </div>
        </div>

        <p className="poppins-regular px-[20px] sm:px-[24px] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0%] text-[#00000099] my-3">
          {content}
        </p>

        <hr className="text-[#E3E3E3] w-full" />

        <div className="flex px-[20px] sm:px-[24px] mt-3 pb-4 gap-5 items-center">
          <img
            className="w-[56px] h-[56px] rounded-[50%] object-cover"
            src={thumbnail}
            alt=""
          />
          <p className="poppins-regular text-[14px] leading-[20px] tracking-[0%] text-[#00000099]">
            {author}
          </p>
        </div>
      </div>
    </div>
  );

  const blogData = [
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    },
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    },
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    },
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    },
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    },
    {
      title: "Yaşıl Gələcəyin Toxumları",
      date: "19.01.2024",
      content: "Gələcək – bu söz bəzən uzaq görünür. Lakin hər əkilən bir ağacla o, bizə bir addım daha yaxınlaşır. İstər bir körpənin doğumu münasibətilə, istər dünyasını dəyişən əzizin xatirəsinə, istərsə də sadəcə təbiətə olan sevgidən – hər bir ağac, yaşıl gələcəyin toxumudur. Uşaqlarımıza quraqlıq deyil, kölgə salan ağaclar, şəhərlərə tənəffüs verən parklar, dünyaya yaşıl rəng qatacaq mənzərələr buraxmaq bizim əlimizdədir. Əgər sənin də içində yaşıl bir dünya arzusu varsa, bu gün bir ağac ək. Bəlkə də sabah bir uşaq onun kölgəsində kitab oxuyacaq, bir ailə onun altında piknik edəcək, bir nəfər isə sənin adına asılmış lövhəni oxuyaraq təbəssüm edəcək.",
      author: "Leyla Xankişiyeva",
      thumbnail: "/assets/img/blogTubnail1.jpg"
    }
  ];

  return (
    <div className='w-[87%] mx-auto px-4 sm:px-0'>
      <div className='flex justify-center items-center flex-wrap gap-4 sm:gap-6 lg:justify-between'>
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            date={blog.date}
            content={blog.content}
            author={blog.author}
            thumbnail={blog.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default Bloglar