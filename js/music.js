const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    order: 'random',
    loop: 'all',
    preload: 'auto',
    mutex: true,
    audio: [
        {
            name: "喜欢你",
            artist: '邓紫棋',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/xihuanni.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/xihuanni.jpg?x-oss-process=style/compress',
        },
        {
            name: '前世今生',
            artist: '杜南/龚子笑',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/qianshijinsheng.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/qianshijinsheng.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Friendships',
            artist: 'Pascal Letoublon & Leony',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Friendships.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Friendships.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Havana',
            artist: 'Camila-Cabello & Young-Thug',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Havana.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Havana.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Light of the Seven',
            artist: 'Ramin Djawadi',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Light_of_the_Seven.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Light_of_the_Seven.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Welcome To Los Santos',
            artist: 'GTA5',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Welcome_To_Los_Santos.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Welcome_To_Los_Santos.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Theme From SanAndreas',
            artist: 'GTA4',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Theme_From_SanAndreas.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Theme_From_SanAndreas.jpg?x-oss-process=style/compress',
        },
        {
            name: '2 Phút Hơn',
            artist: 'Pháo & Kaiz',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/2_Phút_Hơn.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/2_Phút_Hơn.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Wrap Me in Plastic',
            artist: 'Chromance',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/WrapMeInPlastic.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/WrapMeInPlastic.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Never Never',
            artist: 'Drenchill & Indiiana',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/NeverNever.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/NeverNever.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Lovefool',
            artist: 'Twocolors',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/twocolors-Lovefool.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/twocolors-Lovefool.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Can\'t Get You out of My Head',
            artist: 'Glimmer of Blooms',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/GlimmerOfBloomsCannotGetYououtofMyHead.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/GlimmerOfBloomsCannotGetYououtofMyHead.jpg?x-oss-process=style/compress',
        },
        {
            name: '最美的期待',
            artist: '周笔畅',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/zuimeideqidai.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/zuimeideqidai.jpg?x-oss-process=style/compress',
        },
        {
            name: '牧马人',
            artist: '杨坤',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/mumaren.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/mumaren.jpg?x-oss-process=style/compress',
        },
        {
            name: '理想三旬',
            artist: '谢春花',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lixiangsanxun.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lixiangsanxun.jpg?x-oss-process=style/compress',
        },
        {
            name: '送别',
            artist: '李叔同',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/songbie.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/songbie.jpg?x-oss-process=style/compress',
        },
        {
            name: '渡口',
            artist: '蔡琴',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/ferry.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/ferry.jpg?x-oss-process=style/compress',
        },
        {
            name: '当年情',
            artist: '张国荣',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/dang-nian-qing-Live_brother.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/dang-nian-qing-Live_brother.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Hall Om Mig',
            artist: 'Nanne',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/NanneHallomMig.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/NanneHallomMig.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Kолыбельная',
            artist: 'Rauf & Faik',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/yaolanqu.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/yaolanqu.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Sweet Dreams',
            artist: 'Eurythmics',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Sweet_Dreams.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Sweet_Dreams.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Dance Monkey',
            artist: 'Tones and I',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/TonesandI-DanceMonkey.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/TonesandI-DanceMonkey.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Whataya Want From Me',
            artist: 'P!nk',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Whataya_Want_from_Me.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Whataya_Want_from_Me.jpg?x-oss-process=style/compress',
        },
        {
            name: '男孩别哭',
            artist: 'dope',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/nanhaibieku.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/nanhaibieku.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Intro AE86',
            artist: '陈光荣',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/IntroAE86.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/IntroAE86.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Drunk Groove',
            artist: 'Марув',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/DrunkGroove.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/DrunkGroove.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Counting Sheep',
            artist: 'SAFIA',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/SAFIA-CountingSheep.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/SAFIA-CountingSheep.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Yuriko Theme',
            artist: '红色警戒3起义',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/YurikoTheme.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/YurikoTheme.jpg?x-oss-process=style/compress',
        },
        {
            name: '光辉岁月',
            artist: 'Beyond',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/guanghuisuiyue.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/guanghuisuiyue.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Non Je Ne Regrette Rien',
            artist: 'Edith Piaf ',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Non_Je_Ne_Regrette_Rien.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Non_Je_Ne_Regrette_Rien.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Faded',
            artist: 'Alan Walker',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Faded.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Faded.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Larg',
            artist: 'Elgit Doda',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Larg.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Larg.jpg?x-oss-process=style/compress',
        },
        {
            name: '特务J',
            artist: '蔡依林',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/tewuj.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/tewuj.jpg?x-oss-process=style/compress',
        },
        {
            name: '引诱',
            artist: '久石让',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lure.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lure.jpg?x-oss-process=style/compress',
        },
        {
            name: '你的答案',
            artist: '阿冗',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/nidedaan.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/nidedaan.jpg?x-oss-process=style/compress',
        },
        {
            name: '莫呼洛迦',
            artist: '辛晓琪',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Mohuloga.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Mohuloga.jpg?x-oss-process=style/compress',
        },
        {
            name: '来自天堂的魔鬼',
            artist: '邓紫棋',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lai-zi-tian-tang-de-muo-gui.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lai-zi-tian-tang-de-muo-gui.jpg?x-oss-process=style/compress',
        },
        {
            name: '月半小夜曲',
            artist: '李克勤',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/yue-ban-xiao-ye-qu.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/yue-ban-xiao-ye-qu.jpg?x-oss-process=style/compress',
        },
        {
            name: '烦恼歌',
            artist: '张学友',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/fan-nao.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/fan-nao.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Genie In A Bottle',
            artist: 'Enes Yurtlu',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Genie_In_A_Bottle.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Genie_In_A_Bottle.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Please Don\'t Go',
            artist: 'Joel Adams',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/PleaseDon_tGo.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/PleaseDon_tGo.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Way Back Then',
            artist: '鱿鱼游戏',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Way-Back-then.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Way-Back-then.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Let Me Down Slowly',
            artist: 'Alec Benjamin',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Let_Me_Down_Slowly_CUT.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Let_Me_Down_Slowly.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Hymn for the Weekend',
            artist: 'Coldplay & SeeB',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Hymn-for-the-Weekend.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Hymn-for-the-Weekend.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Pimped_out_Getaway',
            artist: 'PAYDAY2',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Pimped_out_Getaway.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Pimped_out_Getaway.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Gangsta\'s Paradise',
            artist: 'Coolio/L.V.',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Gangstas_Paradise.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Gangstas_Paradise.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Thunderclouds',
            artist: 'LSD_Sia_Diplo_Labrinth',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Thunderclouds.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Thunderclouds.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Heathens',
            artist: 'Suicide Squad',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Heathens.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Heathens.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Natural',
            artist: 'Imagine Dragons',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Imagine_Dragons_Natural_CUT.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Imagine_Dragons_Natural_CUT.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Daybreak',
            artist: 'Overwerk',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/OVERWERK-Daybreak.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/OVERWERK-Daybreak.jpg?x-oss-process=style/compress',
        },
        {
            name: 'In The Eyes',
            artist: '江映东',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/In_the_eyes.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/In_the_eyes.jpg?x-oss-process=style/compress',
        },
        {
            name: 'La Câlin',
            artist: 'Serhat Durmus',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/LaCalin.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/LaCalin.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Experience',
            artist: 'Ludovico Einaudi',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Experience.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Experience.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Write This Down',
            artist: 'Soulchef',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/WriteThisDown.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/WriteThisDown.jpg?x-oss-process=style/compress',
        },
        {
            name: 'Morsmordre',
            artist: 'Crazy Donkey',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/CrazyDonkeyMorsmordre.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/CrazyDonkeyMorsmordre.jpg?x-oss-process=style/compress',
        },
        {
            name: 'TRON_Legacy(End_Titles)',
            artist: 'TRON',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/TRON_Legacy(End_Titles).mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/TRON_Legacy(End_Titles).jpg?x-oss-process=style/compress',
        }
    ]
});

// 监听加载完成后事件
window.addEventListener('load', () => {
    var apShow=document.getElementById('aplayer')
    // 监听到加载完毕后,音乐播放器展开显示给用户
    apShow.setAttribute("class", "aplayer aplayer-withlist aplayer-mobile aplayer-fixed");
    setTimeout(function () {
        // 延迟三秒后折叠音乐播放器
        apShow.setAttribute("class", "aplayer aplayer-withlist aplayer-mobile aplayer-fixed aplayer-narrow");
    }, 3000);
})