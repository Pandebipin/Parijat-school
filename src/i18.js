import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n

  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "en",
    returnObjects: true,
    debug: true,
    resources: {
      en: {
        translation: {
          greetings: " Introduction",
          greetings2: "Our Vision",
          greetings3: "Our Mission",
          greetings4: "Our Core Values",
          greetings5: "contact us",
          greetings6: "Admission Procedures",
          greetings7: "Withedrawl procedure",
          greetings8: "  For Pre-school",
          greetings9: "For Grade I to Grade VII",
          greetings10: "message from our principal",
          values1: "respect",
          values2: "Service",
          values3: "Excellence",
          values4: "Responsibility",
          values5: "Teamwork",
          values6: "Empowerment",
          values7: "For Grade XI",
          values8: "For Other Classes",
          values9: "Duly completed registration form",
          values10: "Three passport size photographs",
          values11:
            " A copy of Birth Certificate (Original to be produced for verification)",
          values12: "Original Transfer Certificate",
          values13: "Duly attested copy of SEE Mark Sheet",
          description: {
            line2:
              " We envision parijat public School as a dynamic and inspiring educational institution that sets an example for the learning community.",
            line1:
              "It is the aim of Parijat public School to provide K-12 education that every student deserves. We, at Parijat public School, appreciate diversity and realize that each student is different and should be treated as an unique individual. Our constant endeavor is to help each student realize his/her full potential and discover new horizons in learning. We believe in bringing out the best in our students so that they can rise to the top ever empowered by a belief in unlimited human potential. At Parijat public School, creativity is nurtured, with learners being treated as just learners, imbued with a passion for knowledge and discovery and not as rote machines. In terms of overall academic orientation, we place a pronounced emphasis on Science, Technology, English, Arts, and Mathematics (STEAM), along with other domains critical to overall academic achievement and sustained academic excellence",
            line3:
              " We are committed to providing an outstanding learning environmentto our students, to enable them to excel and thrive in a complex, constantly changing world, getting more interconnected by the day   .",
            line4:
              "  The mission of parijat public School is to produce lifelong  learners with a value system that turns them into good human beings. Honesty, integrity, and sincerity are values that form the strong foundation on which we build an educational process,    culminating in academic and personal success of our students.",
            line5:
              " To this end, we make use of the best educational practices and a  rich curriculum. Added to this, we plan on collaborating with all  stakeholders including students, parents, families, business  houses, civic organizations, higher education institutions and the community at large.",
            line6: "  WE WELCOME YOU TO LEARN MORE ABOUT OUR ADMISSION PROCESS",
            line7: "WE’RE ALWAYS HAPPY TO HEAR FROM YOU",
            line8:
              "   Admissions to other classes are on the basis of a written test and performance in previous schools. The age of admission to Nursery is 3, i.e., the child should have completed 3 years on or before 1st May of the year of admission.",
            line9:
              "Students who passed the SEE or equivalent with required criteria are eligible for admissions to the grade XI program. A strict admission process is in place to uphold the school’s tradition of excellence in academic, the arts and athletics. Faculty and authorities share the responsibility for student selection. Student selection is based on academic and non-academic considerations. Admission criteria includes scholastic performance, test scores in entrance examinations and reports of demonstrated talents and interests.",
            line10:
              " One month’s written notice, in the prescribed form conveying the intention of withdrawal of the child should be submitted to the school authorities. If the application is received in the school office after the first week of the month, one month’s fees, in lieu of notice, will  be charged.",
            line11:
              "Welcome to our school, where every student is encouraged to achieve excellence, embrace curiosity, and grow in a supportive community. Together, we strive for a brighter future.",
          },
        },
      },
      ne: {
        translation: {
          greetings: "परिचय",
          greetings2: "हाम्रो दृष्टिकोण",
          greetings3: "हाम्रो मिशन",
          greetings4: "हाम्रो मूल्यमान्यता",
          greetings5: "हामीलाई सम्पर्क गर्नुहोस्",
          greetings6: "भर्ना प्रक्रिया",
          greetings7: "फिर्ती प्रक्रिया",
          greetings8: "पूर्व-विद्यालयका लागि",
          greetings9: "कक्षा १ देखि कक्षा ८ सम्मका लागि",
          values1: "श्रद्धा",
          values2: "सेवा",
          values3: "उत्कृष्टता",
          values4: "जिम्मेवारी",
          values5: "सहकारिता",
          values6: "सशक्तिकरण",
          values7: "कक्षा ११ का लागि",
          values8: "अन्य कक्षाहरूका लागि",
          values9: "धीतपूर्वक पूर्ण गरिएको दर्ता फारम",
          values10: "तीन पासपोर्ट आकारका फोटो",
          values11:
            "जन्म प्रमाणपत्रको प्रतिलिपि (प्रमाणीकरणको लागि मूल देखाउन प्रस्तुत गर्नुपर्छ)",
          values12: "मूल स्थानान्तरण प्रमाणपत्र",
          values13: "SEE अंकपत्रको विधिवत् प्रमाणित प्रतिलिपि",
          description: {
            line1:
              " पारिजात पब्लिक स्कूलको लक्ष्य के-१२ शिक्षा प्रदान गर्नु हो, जुन प्रत्येक विद्यार्थीले पाउनैपर्छ। पारिजात पब्लिक स्कूलमा हामी विविधताको कदर गर्छौं र बुझ्छौं कि प्रत्येक विद्यार्थी फरक हुन्छ र उनलाई एक अनौठो व्यक्तिको रूपमा व्यवहार गर्नुपर्छ। हाम्रो निरन्तर प्रयास भनेको प्रत्येक विद्यार्थीलाई उसको सम्पूर्ण सम्भावना महसुस गराउन मद्दत गर्नु र सिकाइमा नयाँ क्षितिज खोज्नु हो। हामी विश्वास गर्छौं कि हाम्रा विद्यार्थीहरूमा उत्कृष्टता ल्याउन, तिनीहरूलाई असीमित मानव सम्भावनामा विश्वासले सशक्त बनाउँदै शीर्ष स्थानमा पुग्न सक्षम बनाउनुपर्छ। पारिजात पब्लिक स्कूलमा सिर्जनात्मकतालाई पोषण गरिन्छ, जहाँ विद्यार्थीहरूलाई ज्ञान र खोजको लागि उत्साहले भरिएको सिक्ने साधनको रूपमा व्यवहार गरिन्छ, नकि रट्ने मेसिनको रूपमा। समग्र शैक्षिक अभिमुखताका हिसाबले, हामी विज्ञान, प्रविधि, अंग्रेजी, कला, र गणित (स्टिम) मा विशेष जोड दिन्छौं, साथै समग्र शैक्षिक उपलब्धि र स्थिर शैक्षिक उत्कृष्टताका लागि अन्य महत्वपूर्ण क्षेत्रहरूमा पनि।",
            line2:
              "हामी पारिजात पब्लिक स्कूललाई एक गतिशील र प्रेरणादायक शैक्षिक संस्था रूपमा कल्पना गर्छौं, जसले सिकाइ समुदायका लागि एक उदाहरण प्रस्तुत गर्छ।",
            line3:
              "हामी हाम्रा विद्यार्थीहरूलाई उत्कृष्ट सिकाइ वातावरण प्रदान गर्न प्रतिबद्ध छौं, ताकि उनीहरूले जटिल, निरन्तर परिवर्तनशील, र दिन प्रतिदिन बढ्दो अन्तरसम्बन्धित संसारमा उत्कृष्टता प्राप्त गर्न र फस्टाउन सकून्।",
            line4:
              "पारिजात पब्लिक स्कूलको मिशन जीवनभरी शिक्षार्थीहरू उत्पन्न गर्नु हो, जसले उनीहरूलाई राम्रा मानिसहरूमा परिणत गर्छ। ईमानदारी, अखण्डता, र ईमानदारी यो मूल्यहरू हुन् जुनहरूले हाम्रो शिक्षा प्रक्रिया निर्माण गर्ने ठोस आधार बनाउँछ। जसले हाम्रा विद्यार्थीहरूको शैक्षिक र व्यक्तिगत सफलतामा परिणत हुन्छ।",
            line5:
              "यसलाई पूर्ण गर्नका लागि, हामी सर्वोत्तम शैक्षिक प्रथानहरू र विशाल पाठ्यक्रमको प्रयोग गर्दछौं। यसलाई थप गर्दा, हामी सबै स्टेकहोल्डरहरूसँग सहकार्य गर्ने योजना बनाएका छौं, जसमा विद्यार्थीहरू, माता-पिता, परिवारहरू, व्यवसायी संस्थाहरू, नागरिक संगठनहरू, उच्च शिक्षा संस्थानहरू, र समुदाय समेत समावेश छ।",
            line6:
              " हामी तपाईंलाई हाम्रो भर्ना प्रक्रियाबारे थप जान्न स्वागत गर्छौं।",
            line7: "हामी सधैं तपाईंबाट सुन्न पाउँदा खुशी हुन्छौं।",
            line8:
              "अन्य कक्षाहरूमा भर्ना लेखित परीक्षा र अघिल्लो विद्यालयको प्रदर्शनको आधारमा हुन्छ। नर्सरीमा भर्ना हुने उमेर ३ वर्ष हो, अर्थात् भर्ना हुने वर्षको मे १ मा वा त्यसअघि बच्चाले ३ वर्ष पूरा गरेको हुनुपर्छ।",
            line9:
              "विद्यार्थीहरू जो आवश्यक मापदण्डसहित SEE वा सो सरह उत्तीर्ण भएका छन्, कक्षा ११ को कार्यक्रमको लागि भर्ना गर्न योग्य छन्। शैक्षिक, कला र खेलकुदमा विद्यालयको उत्कृष्टता परम्परालाई कायम राख्न कडा भर्ना प्रक्रिया लागू गरिएको छ। विद्यार्थी छनोटको जिम्मेवारी शिक्षक र अधिकारीहरूले साझा गर्छन्। विद्यार्थी छनोट शैक्षिक र गैर-शैक्षिक विचारहरूको आधारमा गरिन्छ। भर्ना मापदण्डमा शैक्षिक प्रदर्शन, प्रवेश परीक्षामा प्राप्त अंकहरू र देखाएका प्रतिभा र रुचिका प्रतिवेदनहरू समावेश छन्।",
            line10:
              "बच्चाको फिर्तीको इरादा व्यक्त गर्ने एक महिनाको लिखित सूचना, तोकिएको फारममा, विद्यालय प्रशासनलाई बुझाउनुपर्छ। यदि निवेदन महिना सुरु भएको पहिलो सातापछि विद्यालय कार्यालयमा प्राप्त भयो भने, एक महिनाको शुल्क सूचना स्वरूप लिइनेछ।",
            line11:
              "हाम्रो विद्यालयमा स्वागत छ, जहाँ हरेक विद्यार्थीलाई उत्कृष्टता हासिल गर्न, जिज्ञासा अंगाल्न, र सहयोगी समुदायमा वृद्धि गर्न प्रोत्साहित गरिन्छ। सँगै, हामी उज्जवल भविष्यको लागि प्रयास गर्छौं।",
          },
        },
      },
    },
  });

export default i18n;
