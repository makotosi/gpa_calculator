var gpa;

var grade_ap;
var grade_a;
var grade_am;
var grade_bp;
var grade_b;
var grade_bm;
var grade_cp;
var grade_c;
var grade_cm;
var grade_d;
var grade_f;


var c_number = 0;
var grade_number = 0;

var makoto;

function getnumbers () {
	
	c_number = 0;
	grade_number = 0;
	
	var c_ap = document.calc_form.ap.value;
	c_ap = parseInt(c_ap);
	
	if (c_ap) {
		grade_ap = c_ap * 4.33;
		c_number = c_number + c_ap;
		grade_number = grade_number + grade_ap;
	}
	
	var c_a = document.calc_form.a.value;
	c_a = parseInt(c_a);
	
	if (c_a) {
		grade_a = c_a * 4.00;
		c_number = c_number + c_a;
		grade_number = grade_number + grade_a;
	}
	
	var c_am = document.calc_form.am.value;
	c_am = parseInt(c_am);
	
	if (c_am) {
		grade_am = c_am * 3.67;
		c_number = c_number + c_am;
		grade_number = grade_number + grade_am;
	}
	
	var c_bp = document.calc_form.bp.value;
	c_bp = parseInt(c_bp);
	
	if (c_bp) {
		grade_bp = c_bp * 3.33;
		c_number = c_number + c_bp;
		grade_number = grade_number + grade_bp;
	}
	
	var c_b = document.calc_form.b.value;
	c_b = parseInt(c_b);
	
	if (c_b) {
		grade_b = c_b * 3.00;
		c_number = c_number + c_b;
		grade_number = grade_number + grade_b;
	}
	
	var c_bm = document.calc_form.bm.value;
	c_bm = parseInt(c_bm);
	
	if (c_bm) {
		grade_bm = c_bm * 2.67;
		c_number = c_number + c_bm;
		grade_number = grade_number + grade_bm;
	}
	
	var c_cp = document.calc_form.cp.value;
	c_cp = parseInt(c_cp);
	
	if (c_cm) {
		grade_cp = c_cp * 2.33;
		c_number = c_number + c_cp;
		grade_number = grade_number + grade_cp;
	}
	
	var c_c = document.calc_form.c.value;
	c_c = parseInt(c_c);
	
	if (c_c) {
		grade_c = c_c * 2.00;
		c_number = c_number + c_c;
		grade_number = grade_number + grade_c;
	}
	
	var c_cm = document.calc_form.cm.value;
	c_cm = parseInt(c_cm);
	
	if (c_cm) {
		grade_cm = c_cm * 1.67;
		c_number = c_number + c_cm;
		grade_number = grade_number + grade_cm;
	}
	
	var c_d = document.calc_form.d.value;
	c_d = parseInt(c_d);
	
	if(c_d){
		grade_d = c_d * 1.0;
		c_number = c_number + c_d;
		grade_number = grade_number + grade_d;
	}
	
	var c_f = document.calc_form.f.value;
	c_f = parseInt(c_f);
	
	if (c_f) {
		grade_f = c_f * 0;
		c_number = c_number + c_f;
		grade_number = grade_number + grade_f;
	}
	
	
	
	makoto = grade_number / c_number;
	
	if(c_number==0){
		window.alert("成績を入力してください。");
	} else{
		window.alert((makoto).toFixed(2));
	}
	
  
}
