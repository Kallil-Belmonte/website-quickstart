document.addEventListener('DOMContentLoaded', () => {
  const { from: toArray } = Array;

  const select = selector => document.querySelector(selector);
  const selectAll = selector => document.querySelectorAll(selector);

  // ANIMATE ELEMENTS
  const animateElements = () => {
    const animate = (selector, animateClass, showOnLoad) => {
      const rect = select(selector).getBoundingClientRect();
      const isElementVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      const elementWasNotAnimated = !toArray(select(selector).classList).includes(animateClass);

      if (showOnLoad || (isElementVisible && elementWasNotAnimated)) {
        toArray(selectAll(selector)).forEach(element => {
          element.classList.add(animateClass);
        });
      }
    };

    animate('#hero #see-more', 'fadeIn', true);

    window.onscroll = () => {
      animate('#services .section-title', 'fadeIn');
    };
  };

  // GET CURRENT YEAR
  const getCurrentYear = () => {
    toArray(selectAll('.current-year')).forEach(element => {
      element.textContent = new Date().getFullYear();
    });
  };

  // INIT
  animateElements();
  getCurrentYear();
});

// SNIPPETS

// Desabilita o scroll do mapa e habilita quando ele é clicado
function iframeEnabling() {
  $('.iframe-container').click(function () {
    $('.iframe-container iframe').removeClass('scrolloff');
  });

  $('.iframe-container').mouseleave(function () {
    $('.iframe-container iframe').addClass('scrolloff');
  });
}

// Efeito de carregamento na página
$(window).on('load', function (e) {
  $('.spinner-container').hide();
});

// Detecta se o usuário chegou ao topo da página
$(window).scroll(function () {
  if (!$(window).scrollTop()) {
    // Ação que deve ser executada
  }
});

// Detecta se o usuário chegou ao fim da página
$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    // Ação que deve ser executada
  }
});

// Fazer uma ação se houver um clique fora do elemento
var selection = $('.element');

$(window).click(function (event) {
  var target = $(event.target);

  if (!target.is(selection)) {
    // Ação que deve ser executada
  }
});

// Código para isolar plugins/scripts que estão gerando conflito com os outros
jQuery(document).ready(function ($) {
  // Aqui vai o plugin/script
});

// Código para verificar se o site está sendo visualizado em celular

// Versão 1
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Código para caso o aparelho for celular
} else {
  // Código para caso o aparelho for desktop
}

// Versão 2
var ua = navigator.userAgent;
if (
  ua.match(/Android/i) ||
  ua.match(/webOS/i) ||
  ua.match(/iPhone/i) ||
  ua.match(/iPad/i) ||
  ua.match(/iPod/i) ||
  ua.match(/BlackBerry/) ||
  ua.match(/Windows Phone/i) ||
  ua.match(/ZuneWP7/i)
) {
  // Código para caso o aparelho for celular
} else {
  // Código para caso o aparelho for desktop
}

// Versão 3
var customizeForDevice = function () {
  var ua = navigator.userAgent;
  var checker = {
    android: ua.match(/Android/),
    iphone: ua.match(/(iPhone|iPod|iPad)/),
    windowsPhone: ua.match(/Windows Phone/),
    blackBerry: ua.match(/BlackBerry/),
  };

  if (checker.android) {
    // Código caso o aparelho for Android
  } else if (checker.iphone) {
    // Código caso o aparelho for iPhone
  } else if (checker.windowsPhone) {
    // Código caso o aparelho for Windows Phone
  } else if (checker.blackBerry) {
    // Código caso o aparelho for Black Berry
  } else {
    // Código caso for não for nenhum desses aparelhos
  }
};

// Media query

// Para quando a página é carregada
// const mediaQuery = window.matchMedia('(min-width: 500px)');

// if (mediaQuery.matches) {
//   // A janela é pelo menos 500px
// } else {
//   // A janela é menor que 500px
// }

// Para quando houver a necessidade de detectar o redimensionamento da janela
// const mediaQuery = window.matchMedia('(min-width: 500px)');

// function widthChange(mediaQuery) {
//   if (mediaQuery.matches) {
//     // A janela é 500px ou maior
//   } else {
//     // A janela é menor que 500px
//   }
// }

// widthChange(mediaQuery);
// mediaQuery.addListener(widthChange);

// Toggle do menu hamburguer
$('.hamburger').click(function () {
  $(this).toggleClass('is-active');
});

// Menu fixo no scroll (quando o menu está no topo)
$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $('.main-menu').addClass('navbar-fixed-top');
  } else {
    $('.main-menu').removeClass('navbar-fixed-top');
  }
});

// Menu fixo no scroll (quando o menu não está no topo)
$(window).on('scroll', function () {
  var $hero = $('#hero-slide').height();

  if ($(this).scrollTop() >= $hero) {
    $('.main-menu').addClass('navbar-fixed-top');
  } else {
    $('.main-menu').removeClass('navbar-fixed-top');
  }
});

// Scroll suave do menu
$('.main-menu li a[href^="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
    var menuHeight = $('.main-menu').innerHeight(); // Para considerar a borda use outerHeight();

    $('html, body').animate(
      {
        scrollTop: targetOffset - menuHeight,
      },
      500,
    );
  });

// Fecha o menu mobile quando algum item é clicado
$('.main-menu a').click(function () {
  if ($(window).width() < 768) {
    $('.main-menu .navbar-toggle').trigger('click');
  }
});

// Faz o menu desaparecer quando há scroll para baixo e aparecer quando há scroll para cima
// (necessida da classe nav-up configurada com o 'top' no valor negativo da altura do menu, ex. top: -70px;)
function menuDisplayOnScroll() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.main-menu').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.main-menu').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.main-menu').removeClass('nav-up');
      }
    }

    lastScrollTop = st;
  }
}

// Scroll suave para quando a pessoa clicar no ícone de 'Ver mais'
$('#see-more').on('click', function (e) {
  e.preventDefault();

  var id = $(this).attr('href');
  var targetOffset = $(id).offset().top;
  var menuHeight = $('.main-menu').innerHeight();

  $('html, body').animate(
    {
      scrollTop: targetOffset - menuHeight,
      // Ou apenas scrollTop: targetOffset
    },
    500,
  );
});

// Visibilidade do ícone de 'Ver mais'
$(window).scroll(function () {
  if (!$(window).scrollTop()) {
    $('#see-more').fadeIn(200);
  } else {
    $('#see-more').fadeOut(500);
  }
});

// Faz o scroll pro primeiro item do menu quando a pessoa está no topo da página
$(document).ready(function () {
  var $this = $(this);

  $this.one('scroll', function () {
    $('#see-more').trigger('click');
  });

  $(window).scroll(function () {
    if (!$(window).scrollTop()) {
      $this.one('scroll', function () {
        $('#see-more').trigger('click');
      });
    }
  });
});

// Deixa a altura de todos os itens iguais (com base na altura do maior)
function equalizeHeight(selector) {
  var minHeight = 0;

  $(selector).each(function () {
    if ($(this).height() > minHeight) {
      minHeight = $(this).height();
    }
  });

  $(selector).css({ 'min-height': minHeight + 'px' });
}
