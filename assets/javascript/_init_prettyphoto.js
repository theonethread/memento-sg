//
//---------------------------------------------------------------------------------PRETTYPHOTO
//
// init
jQuery(document).ready(initPretty);
// functions
function initPretty() {
	jQuery.fn.prettyPhoto({
		animationSpeed: 'normal', /* fast/slow/normal */
		opacity: 0.80, /* Value between 0 and 1 */
		showTitle: true, /* true/false */
		allowresize: true, /* true/false */
		default_width: 500,
		default_height: 100,
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'light_rounded', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'window', /* Set the flash wmode attribute */
		autoplay: true, /* Automatically start videos: True/False */
		modal: true, /* If set to true, only the close button will close the window */
		changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
		callback: function(){}, /* Called when prettyPhoto is closed */
		markup: '<div class="pp_pic_holder"> \
					<div class="pp_top"> \
						<div class="pp_left"></div> \
						<div class="pp_middle"></div> \
						<div class="pp_right"></div> \
					</div> \
					<div class="pp_content_container"> \
						<div class="pp_left"> \
						<div class="pp_right"> \
							<div class="pp_content"> \
								<div class="pp_fade"> \
									<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_hoverContainer"> \
										<a class="pp_next" href="#">next</a> \
										<a class="pp_previous" href="#">previous</a> \
									</div> \
									<div id="pp_full_res"></div> \
									<div class="pp_details clearfix"> \
										<a class="pp_close" href="#">Close</a> \
										<p class="pp_description"></p> \
										<div class="pp_nav"> \
											<a href="#" class="pp_arrow_previous">Previous</a> \
											<p class="currentTextHolder">0/0</p> \
											<a href="#" class="pp_arrow_next">Next</a> \
										</div> \
									</div> \
								</div> \
							</div> \
						</div> \
						</div> \
					</div> \
					<div class="pp_bottom"> \
						<div class="pp_left"></div> \
						<div class="pp_middle"></div> \
						<div class="pp_right"></div> \
					</div> \
				</div> \
				<div class="pp_overlay"></div> \
				<div class="ppt"></div>',
		image_markup: '<img id="fullResImage" src="" />',
		flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
		quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
		iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
		inline_markup: '<div class="pp_inline clearfix">{content}</div>'
	});

	jQuery('div#prettyphoto').each(function(){
        var $item = jQuery(this);
		$item.find('a').attr('id', $item.find('a').attr('href'));
		$item.find('a').attr('id', $item.find('a').attr('href')).attr('href', 'javascript:void(0);').click(function() {
			showPretty( jQuery(this).attr('id'), jQuery(this).html(), jQuery(this).parent().find('div#pretty_desc').html());
		});
	});
}
function showPretty(urls, titles, descriptions) {
	jQuery.prettyPhoto.open(urls, titles, descriptions);
}