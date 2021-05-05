import jQuery from 'jquery';

jQuery(document).ready(($) => {
  const sections = $('section');
  const navlinks = $('.nav-link');

  sections.waypoint({
    handler(event, direction) {
      let activeSection;

      activeSection = $(this);
      if (direction === 'up') activeSection = activeSection.prev();

      const activeLink = $(`#nav-wrap a[href="#${activeSection.attr('id')}"]`);

      navlinks.parent().removeClass('current');
      activeLink.parent().addClass('current');
    },
    offset: '35%',
  });
});
