$(document).ready(function() {
		var lol = {
			cards: [1,1,2,2,3,3,4,4,5,5],
			unit: function() {
				lol.suffle();

			},
			suffle: function() {
				var random=0;
				var temp=0;
				for (var i = 0; i < lol.cards.length; i++) {
					random=Math.round(Math.random() * i);

					temp = lol.cards[i];
					lol.cards[i]=lol.cards[random];
					lol.cards[random]=temp;

				}
				console.log('shuffled card array '+lol.cards);
				lol.assignCards();
			},
			assignCards: function() {
				$('.memory-card').each(function(index){
					$(this).attr('data-card-value',lol.cards[index]);
				});
				lol.clickHandler();
			},
			clickHandler: function() {
				$('.memory-card').on('click',function() {
					$(this).addClass('selected');
          $(this).toggleClass( "flip", 1000 );

					lol.checkMatch();

				});

			},
			checkMatch: function() {
				if($('.selected').length === 2) {
					if($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
						//remove card
						$('.selected').each(function() {
							$(this).removeClass('unmatched').removeClass('selected');
						});
						lol.checkWin();
					} else {
						//flip card back over
						setTimeout(function() {
							$('.selected').each(function(){
								$(this).html('').removeClass('selected');
                $('.memory-card').toggleClass( "flip");

							});



						},1000);

					}

				}
			},
			checkWin: function() {
					if( $('.unmatched').length === 0) {
						$('.container').html('<div class="result"> <h1>GAME OVER </h1>' +
											'<h1>YOU WON </h1>' +
											' <button class="playAgain">Play Again</button> </div>');
					}
					$('.playAgain').click(function() {
				 location.reload();
				});
				}

		}

		lol.unit();
	});
// $(document).ready(function() {
// 		var lol = {
// 			cards: [1,1,2,2,3,3,4,4,5,5],
// 			unit: function() {
// 				lol.suffle();
//
// 			},
// 			suffle: function() {
// 				var random=0;
// 				var temp=0;
// 				for (var i = 0; i < lol.cards.length; i++) {
// 					random=Math.round(Math.random() * i);
//
// 					temp = lol.cards[i];
// 					lol.cards[i]=lol.cards[random];
// 					lol.cards[random]=temp;
//
// 				}
// 				console.log('shuffled card array '+lol.cards);
// 				lol.assignCards();
// 			},
// 			assignCards: function() {
// 				$('.memory-card').each(function(index){
// 					$(this).attr('data-card-value',lol.cards[index]);
// 				});
// 				lol.clickHandler();
// 			},
// 			clickHandler: function() {
// 				$('.memory-card').on('click',function() {
// 					$(this).addClass('selected');
//           $(this).toggleClass( "flip", 1000 );
//
// 					lol.checkMatch();
//
// 				});
//
// 			},
// 			checkMatch: function() {
// 				if($('.selected').length === 2) {
// 					if($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
// 						//remove card
// 						$('.selected').each(function() {
// 							$(this).removeClass('unmatched').removeClass('selected');
// 						});
// 						lol.checkWin();
// 					} else {
// 						//flip card back over
// 						setTimeout(function() {
// 							$('.selected').each(function(){
// 								$(this).html('').removeClass('selected');
//                 $('.memory-card').toggleClass( "flip");
//
// 							});
//
//
//
// 						},1000);
//
// 					}
//
// 				}
// 			},
// 			checkWin: function() {
// 					if( $('.unmatched').length === 0) {
// 						$('.container').html('<div class="result"> <h1>GAME OVER </h1>' +
// 											'<h1>YOU WON </h1>' +
// 											' <button class="playAgain">Play Again</button> </div>');
// 					}
// 					$('.playAgain').click(function() {
// 				 location.reload();
// 				});
// 				}
//
// 		}
//
// 		lol.unit();
// 	});
