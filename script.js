function addToCalendar() {
    const title = "Engagement of Rizka & Fajar";
    const location = "Bumi Apsari, https://maps.app.goo.gl/YTZC6VE47wrZQUbu8";
    const details = "We are requesting the honor of your presence at our engagement day.";
    const startDate = "20240810T090000Z";
    const endDate = "20240810T110000Z";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

    window.open(url, "_blank");
}
