/**
 * Created by Sujith on 12/14/2015.
 */
function addHeader()
{
            var header = document.getElementById('header');

            if(header)
            {
                var header_contents_owner = read_contents("app/guest/MasterPage_Contents/Header_contents");
                if(header_contents_owner)
                {
                    place_in_outerHTML(header,header_contents_owner);
                }
            }
}